(function () {
    "use strict";

    let moneySpent = 0;

    let pitySystemActive = false;

    let totalGemCount = 0;

    let gemCount = {'1': 0.0, '2': 0.0, '2_5': 0.0, '3_5': 0.0, '4_5': 0.0, '5_5': 0.0,}

    const GEM_TYPES = [1, 2, 5];

    const GEM_ODDS = [0.754, 0.201, 0.045];

    const FIVE_STAR_GEM_TYPES = [2, 3, 4, 5]

    const FIVE_STAR_ODDS = [0.75, 0.2, 0.04, 0.01];

    const ONE_STAR_GEMS = [
        'gem/trickshot_gem',
        'gem/everlasting_torment',
        'gem/the_black_rose',
        'gem/seleds_weakening',
        'gem/everlasting_torment',
        'gem/chained_death',
        'gem/berserkers_eye',
        'gem/mocking_laughter',
        'gem/zod_stone',
        'gem/caarsens_invigoration',
        'gem/defiant_soul',
        'gem/freedom_and_devotion',
        'gem/nightmare_wreath',
        'gem/respite_stone',
        'gem/seleds_weakening',
        'gem/pain_of_subjugation',
    ];

    const TWO_STAR_GEMS = [
        'gem/power_and_command',
        'gem/the_hunger',
        'gem/bloody_reach',
        'gem/cutthroats_grin',
        'gem/chained_death',
        'gem/lightning_core',
        'gem/battleguard',
        'gem/followers_burden',
        'gem/unity_crystal',
    ];

    const FIVE_STAR_GEMS = [
        'gem/bottled_hope',
        'gem/phoenix_ashes',
        'gem/bsj',
        'gem/chip_of_stoned_flesh',
        'gem/echoing_shade',
        'gem/howlers_call',
        'gem/zwensons_haunting',
        'gem/seeping_bile',
        'gem/blessing_of_the_worthy',
    ];

    const $doors = document.querySelectorAll(".door");

    const $fiveStarCountMain = $('#five-star-count-main')

    const $moneySpent = $('#money-spent');
    const $gemInfoModal = $('#gem-info-modal');

    $doors.forEach(($door) => {
        $($door).on('click', event => {
            const $target = $(event.target);
            const $doorContainer = $target.hasClass('door-container')
                ? $target
                : $target.parents('.door-container');

            const $boxes = $('.boxes', $doorContainer);
            const $gemInfo = $('.gem-info', $doorContainer);
            const selectedGem = $boxes.attr('selected-gem');

            if (selectedGem !== 'none') {
                const $gemInfoModalContent = $gemInfo.clone();
                $gemInfoModalContent.show();
                let imageHtml = '<img src="' + 'assets/additional_info/' + $boxes.attr('selected-gem') + '.jpg' + '" class="modal-gem-info" style="display: block;" alt="">';
                $('.gem-info-modal-content').html(imageHtml);
                $gemInfoModal.modal('show');
            }
        })
    });

    async function spin() {
        moneySpent += 25;

        if (moneySpent % 125 === 0) {
            pitySystemActive = true;
        }

        $moneySpent.text(moneySpent);
        init(false);

        await $doors.forEach(($door) => {
            const $boxes = $('.boxes', $door);
            const duration = parseInt($boxes.css('transitionDuration'));
            $boxes.css('transform', "translateY(0)");
            return new Promise((resolve) => {
                setTimeout(resolve, duration * 100);
            });
        });
        for (const $door of $doors) {
            await new Promise((resolve) => {
                setTimeout(resolve, 1);
                $('#stars', $($door).parent()).css('display', 'grid');
            });
        }
    }

    async function autoSpin() {
        let currentFiveStarAmount = gemCount['5_5'];
        while (gemCount['5_5'] === currentFiveStarAmount) {
            await spin();
        }
    }

    function init(firstInit = true) {
        $doors.forEach(($door) => {
            {
                const $boxes = $door.querySelector(".boxes");
                const $boxesClone = $boxes.cloneNode(false);

                let pool = []
                    .concat(ONE_STAR_GEMS, TWO_STAR_GEMS, FIVE_STAR_GEMS)
                    .sort(() => 0.5 - Math.random());

                if (firstInit) {
                    pool.unshift('crest');
                }

                let gem = {};

                $boxesClone.setAttribute('selected-gem', 'none');

                if (!firstInit) {
                    gem = pickGem();
                    calculateDropRate(gem);
                    pool.push(gem.name);

                    $boxesClone.setAttribute('selected-gem', gem.name);
                    $boxesClone.addEventListener(
                        "transitionstart",
                        function () {
                            this.querySelectorAll(".box").forEach(($box) => {
                                $box.style.filter = "blur(1px)";
                            });
                        },
                        {once: true}
                    );

                    $boxesClone.addEventListener(
                        "transitionend",
                        function () {
                            this.querySelectorAll(".box").forEach(($box, index) => {
                                $box.style.filter = "blur(0)";
                                if (index > 0) {
                                    this.removeChild($box);
                                }
                            });
                        },
                        {once: true}
                    );
                }

                for (let i = pool.length - 1; i >= 0; i--) {
                    const $box = document.createElement("div");
                    $box.classList.add("box");
                    $box.style.width = $door.clientWidth + "px";
                    $box.style.height = $door.clientHeight + "px";
                    $box.innerHTML = '<img src="assets/' + pool[i] + '.webp' + '" alt=""/>';
                    $boxesClone.appendChild($box);
                }

                $boxesClone.style.transitionDuration = '1s';
                $boxesClone.style.transform = `translateY(-${
                    $door.clientHeight * (pool.length - 1)
                }px)`;

                $door.replaceChild($boxesClone, $boxes);

                if (!firstInit) {
                    let $stars = $door.parentElement.querySelector('#stars');
                    if ($stars !== null) {
                        $door.parentElement.removeChild($stars);
                    }
                    $stars = document.createElement("div");
                    $stars.style.position = 'absolute';
                    $stars.style.display = 'none';
                    $stars.id = 'stars';

                    let starsHtml = '<i class="fa-solid fa-star yellow-star"></i>'.repeat(gem.rank);
                    if (gem.fiveStarGem) {
                        starsHtml += '<i class="fa-solid fa-star"></i>'.repeat(5 - gem.rank)
                    }
                    $stars.innerHTML = starsHtml;

                    $door.parentElement.appendChild($stars)
                }
            }
        })
    }

    const createDistribution = (array, weights, size) => {
        const distribution = [];
        const sum = weights.reduce((a, b) => a + b);
        const quant = size / sum;
        for (let i = 0; i < array.length; ++i) {
            const limit = quant * weights[i];
            for (let j = 0; j < limit; ++j) {
                distribution.push(i);
            }
        }
        return distribution;
    };

    const randomIndex = (distribution) => {
        const index = Math.floor(distribution.length * Math.random());
        return distribution[index];
    };

    function determineGemRank() {
        const distribution = createDistribution(FIVE_STAR_GEM_TYPES, FIVE_STAR_ODDS, 100);
        const index = randomIndex(distribution);

        return FIVE_STAR_GEM_TYPES[index];
    }

    function pickGem() {
        const distribution = createDistribution(GEM_TYPES, GEM_ODDS, 1000);
        let index = randomIndex(distribution);

        if (pitySystemActive) {
            index = 2;
            pitySystemActive = false;
        }

        switch (GEM_TYPES[index]) {
            case 1:
                $('#one-star-count').text(++gemCount["1"]);
                return {
                    name: ONE_STAR_GEMS[Math.floor(Math.random() * ONE_STAR_GEMS.length)],
                    rank: 1,
                    fiveStarGem: false
                };
            case 2:
                $('#two-star-count').text(++gemCount["2"]);
                return {
                    name: TWO_STAR_GEMS[Math.floor(Math.random() * TWO_STAR_GEMS.length)],
                    rank: 2,
                    fiveStarGem: false
                };
            case 5:
                const gemRank = determineGemRank();

                switch (gemRank) {
                    case 2:
                        $('#two-of-five-star-count').text(++gemCount['2_5']);
                        break;
                    case 3:
                        $('#three-star-count').text(++gemCount['3_5']);
                        break;
                    case 4:
                        $('#four-star-count').text(++gemCount['4_5']);
                        break;
                    case 5:
                        $('#five-star-count').text(++gemCount['5_5']);
                        $fiveStarCountMain.text(gemCount['5_5']);
                }

                return {
                    name: FIVE_STAR_GEMS[Math.floor(Math.random() * FIVE_STAR_GEMS.length)],
                    rank: gemRank,
                    fiveStarGem: true
                };
        }
    }

    function calculateDropRate() {
        $('#total-gem-count').text(++totalGemCount);
        $('#one-star-percentage').text(calculatePercentage(gemCount['1']));
        $('#two-star-percentage').text(calculatePercentage(gemCount['2']));
        $('#two-of-five-star-percentage').text(calculatePercentage(gemCount['2_5']));
        $('#three-star-percentage').text(calculatePercentage(gemCount['3_5']));
        $('#four-star-percentage').text(calculatePercentage(gemCount['4_5']));
        $('#five-star-percentage').text(calculatePercentage(gemCount['5_5']));
    }

    function calculatePercentage(gemCount) {
        return (gemCount / totalGemCount * 100).toFixed(2)
    }

    function buttonPressed(event) {
        $(event.target).addClass('button-pressed');
    }

    function buttonReleased(event) {
        $(event.target).removeClass('button-pressed');
    }

    if (window.matchMedia("(max-width: 1200px)").matches) {
        const $statsWrapper = $('#stats-wrapper');
        $('#stats-modal-content').append($statsWrapper.html());
        $statsWrapper.remove();
    }

    $("#spin")
        .on('click', spin)
        .on('mousedown', buttonPressed)
        .on('mouseup', buttonReleased)
        .on('touchstart', buttonPressed);

    $("#auto-spin")
        .on('click', autoSpin)
        .on('mousedown', buttonPressed)
        .on('mouseup', buttonReleased)
        .on('touchstart', buttonPressed);

    $("#paypal-button")
        .on('mousedown', buttonPressed)
        .on('mouseup', buttonReleased);

    init();
})();
