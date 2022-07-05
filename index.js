(function () {
    "use strict";

    let moneySpent = 0;

    let pitySystemActive = false;

    let resonance = 0;

    let gemPower = 0;

    let selectedGems = [];

    let gemInfo = {
        1: {
            'gem/trickshot_gem': {
                name: 'Trickshot Gem',
                rank: {
                    1: 0,
                    2: 0,
                    3: 0,
                    4: 0,
                    5: 0,
                    6: 0,
                    7: 0,
                    8: 0,
                    9: 0,
                    10: 0
                }
            },
            'gem/everlasting_torment': {
                name: 'Everlasting Torment',
                rank: {
                    1: 0,
                    2: 0,
                    3: 0,
                    4: 0,
                    5: 0,
                    6: 0,
                    7: 0,
                    8: 0,
                    9: 0,
                    10: 0
                }
            },
            'gem/the_black_rose': {
                name: 'The Black Rose',
                rank: {
                    1: 0,
                    2: 0,
                    3: 0,
                    4: 0,
                    5: 0,
                    6: 0,
                    7: 0,
                    8: 0,
                    9: 0,
                    10: 0
                }
            },
            'gem/chained_death': {
                name: 'Chained Death',
                rank: {
                    1: 0,
                    2: 0,
                    3: 0,
                    4: 0,
                    5: 0,
                    6: 0,
                    7: 0,
                    8: 0,
                    9: 0,
                    10: 0
                }
            },
            'gem/berserkers_eye': {
                name: "Berserker's Eye",
                rank: {
                    1: 0,
                    2: 0,
                    3: 0,
                    4: 0,
                    5: 0,
                    6: 0,
                    7: 0,
                    8: 0,
                    9: 0,
                    10: 0
                }
            },
            'gem/mocking_laughter': {
                name: 'Mocking Laughter',
                rank: {
                    1: 0,
                    2: 0,
                    3: 0,
                    4: 0,
                    5: 0,
                    6: 0,
                    7: 0,
                    8: 0,
                    9: 0,
                    10: 0
                }
            },
            'gem/zod_stone': {
                name: 'Zod Stone',
                rank: {
                    1: 0,
                    2: 0,
                    3: 0,
                    4: 0,
                    5: 0,
                    6: 0,
                    7: 0,
                    8: 0,
                    9: 0,
                    10: 0
                }
            },
            'gem/caarsens_invigoration': {
                name: "Caarsen's Invigoration",
                rank: {
                    1: 0,
                    2: 0,
                    3: 0,
                    4: 0,
                    5: 0,
                    6: 0,
                    7: 0,
                    8: 0,
                    9: 0,
                    10: 0
                }
            },
            'gem/defiant_soul': {
                name: 'Defiant soul',
                rank: {
                    1: 0,
                    2: 0,
                    3: 0,
                    4: 0,
                    5: 0,
                    6: 0,
                    7: 0,
                    8: 0,
                    9: 0,
                    10: 0
                }
            },
            'gem/freedom_and_devotion': {
                name: 'Freedom and Devotion',
                rank: {
                    1: 0,
                    2: 0,
                    3: 0,
                    4: 0,
                    5: 0,
                    6: 0,
                    7: 0,
                    8: 0,
                    9: 0,
                    10: 0
                }
            },
            'gem/respite_stone': {
                name: 'Respite Stone',
                rank: {
                    1: 0,
                    2: 0,
                    3: 0,
                    4: 0,
                    5: 0,
                    6: 0,
                    7: 0,
                    8: 0,
                    9: 0,
                    10: 0
                }
            },
            'gem/seleds_weakening': {
                name: "Seled's Weakening",
                rank: {
                    1: 0,
                    2: 0,
                    3: 0,
                    4: 0,
                    5: 0,
                    6: 0,
                    7: 0,
                    8: 0,
                    9: 0,
                    10: 0
                }
            },
            'gem/pain_of_subjugation': {
                name: 'Pain of Subjugation',
                rank: {
                    1: 0,
                    2: 0,
                    3: 0,
                    4: 0,
                    5: 0,
                    6: 0,
                    7: 0,
                    8: 0,
                    9: 0,
                    10: 0
                }
            },
            'gem/nightmare_wreath': {
                name: 'Nightmare Wreath',
                rank: {
                    1: 0,
                    2: 0,
                    3: 0,
                    4: 0,
                    5: 0,
                    6: 0,
                    7: 0,
                    8: 0,
                    9: 0,
                    10: 0
                }
            },
        }
    };

    let totalGemCount = 0;

    let gemCount = {'1': 0.0, '2': 0.0, '2_5': 0.0, '3_5': 0.0, '4_5': 0.0, '5_5': 0.0,}

    const GEM_TYPES = [1, 2, 5];

    const GEM_ODDS = [0.754, 0.201, 0.045];

    const FIVE_STAR_GEM_TYPES = [2, 3, 4, 5]

    const FIVE_STAR_ODDS = [0.75, 0.2, 0.04, 0.01];

    const ONE_STAR_GEMS = [
        'gem/trickshot_gem',
        'gem/the_black_rose',
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
    const $resonance = $('#resonance');
    const $gemPower = $('.gem-power');
    const $gemRank = $('#gem-rank');
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
                let gemName = ONE_STAR_GEMS[Math.floor(Math.random() * ONE_STAR_GEMS.length)];
                gemInfo[1][gemName]['rank'][1]++;
                $gemPower.text(gemPower += 1);

                return {
                    name: gemName,
                    rank: 1,
                    fiveStarGem: false
                };
            case 2:
                $('#two-star-count').text(++gemCount["2"]);
                $gemPower.text(gemPower += 4);
                return {
                    name: TWO_STAR_GEMS[Math.floor(Math.random() * TWO_STAR_GEMS.length)],
                    rank: 2,
                    fiveStarGem: false
                };
            case 5:
                $gemPower.text(gemPower += 32);
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

    function upgradeGem($target, name, stars, currentRank) {
        console.log($target, name, stars, currentRank);
        if (currentRank > 9) {
            return;
        }

        const $gemPowerForUpgrade = $('.gem-power-for-upgrade', $target);
        switch (stars) {
            case 1: {
                switch (currentRank) {
                    case 1:
                        console.log(gemInfo[1][name]);
                        if (gemPower >= 1 && gemInfo[1][name]['rank'][1] > 0) {
                            autoFillGemPower(1);
                            updateGemInfoGemRank($target, name, currentRank, stars);
                            currentRank++;
                            $gemPowerForUpgrade.text(5);
                        }
                        break;
                    case 2:
                        if (gemPower >= 5) {
                            autoFillGemPower(5);
                            updateGemInfoGemRank($target, name, currentRank, stars);
                            currentRank++;
                            $gemPowerForUpgrade.text(10);
                        }
                        break;
                    case 3:
                        if (gemPower >= 10) {
                            autoFillGemPower(10);
                            updateGemInfoGemRank($target, name, currentRank, stars);
                            currentRank++;
                            $gemPowerForUpgrade.text(15);
                        }
                        break;
                    case 4:
                        if (gemPower >= 15) {
                            autoFillGemPower(15);
                            updateGemInfoGemRank($target, name, currentRank, stars);
                            currentRank++;
                            $gemPowerForUpgrade.text(20);
                        }
                        break;
                    case 5:
                        if (gemPower >= 20) {
                            autoFillGemPower(20);
                            updateGemInfoGemRank($target, name, currentRank, stars);
                            currentRank++;
                            $gemPowerForUpgrade.text(25);
                        }
                        break;
                    case 6:
                        if (gemPower >= 25 && gemInfo[1][name]['rank'][1] > 0) {
                            autoFillGemPower(25);
                            upgradeOneStarGemUsingDuplicate($target, name, currentRank, stars);
                            currentRank++;
                            $gemPowerForUpgrade.text(30);
                        }
                        break;
                    case 7:
                        if (gemPower >= 30 && gemInfo[1][name]['rank'][1] > 0) {
                            autoFillGemPower(30);
                            upgradeOneStarGemUsingDuplicate($target, name, currentRank, stars);
                            currentRank++;
                            $gemPowerForUpgrade.text(40);
                        }
                        break;
                    case 8:
                        if (gemPower >= 40 && gemInfo[1][name]['rank'][1] > 0) {
                            autoFillGemPower(40);
                            upgradeOneStarGemUsingDuplicate($target, name, currentRank, stars);
                            currentRank++;
                            $gemPowerForUpgrade.text(50);
                        }
                        break;
                    case 9:
                        if (gemPower >= 50 && gemInfo[1][name]['rank'][1] > 0) {
                            autoFillGemPower(1);
                            upgradeOneStarGemUsingDuplicate($target, name, currentRank, stars);
                            currentRank++;
                            $('.gem-upgrade-requirements', $target).hide();
                            $('.upgrade-gem-btn', $target).hide();
                        }
                }
            }
        }

        return currentRank;
    }

    function autoFillGemPower(gemPowerToSubtract) {
        gemPower -= gemPowerToSubtract;
        $gemPower.text(gemPower);
    }

    function upgradeOneStarGemUsingDuplicate($target, name, currentRank, stars) {
        updateGemInfoGemRank($target, name, currentRank, stars);
        gemInfo[stars][name].rank[1]--;
        $gemPower.text(--gemPower);

    }

    function updateGemInfoGemRank($target, name, rank, stars) {
        gemInfo[stars][name].rank[rank + 1]++;
        if (gemInfo[stars][name].rank[rank] > 0) {
            gemInfo[stars][name].rank[rank]--;
        }
        $gemRank.text(rank + 1);
        $('.gem-rank', $target).text(rank + 1);
    }

    function buttonPressed(event) {
        $(event.target).addClass('button-pressed');
    }

    function buttonReleased(event) {
        $(event.target).removeClass('button-pressed');
    }

    function onUpgrade(event) {
        const $target = $(event.target);
        const originalRank = parseInt($target.attr('data-gem-rank'));
        const currentRank = upgradeGem(
            $($target.parent().parent()),
            $target.attr('data-gem-name'),
            parseInt($target.attr('data-gem-stars')),
            originalRank
        );
        $target.attr('data-gem-rank', currentRank);

        if (currentRank > originalRank) {
            $resonance.text(resonance += 15);
        }
    }

    function onGemSelect(event) {
        const $target = $(event.target);
        const $parent = $($target.parent());
        const selectedGem = $target.val();
        $target.css('background-image', 'none')
        $('.gem-icon', $parent).attr('src', 'assets/' + selectedGem + '.webp')
        $('.gem-upgrade-wrapper', $parent).show();
        $target.attr('disabled', 'disabled');

        $('.upgrade-gem-btn', $parent).attr('data-gem-name', selectedGem);
        $('.upgrade-gem-btn', $parent).attr('data-gem-stars', $('.star-rating-select', $parent).val());

        $('.star-rating-select', $parent).remove();
        if (ONE_STAR_GEMS.includes(selectedGem)) {
            $resonance.text(resonance += 15);
            if (gemPower > 0) {
                autoFillGemPower(1);
            }
        }
        selectedGems.push(selectedGem);
    }

    function gemOfStarRatingExist(starRating) {
        return gemCount[starRating] > 0;
    }

    function createStarRatingSelectOptions() {
        let optionsHtml = '';
        if (gemOfStarRatingExist(1)) {
            optionsHtml += '<option value="1">1 Star</option>';
        }

        if (gemOfStarRatingExist(2)) {
            optionsHtml += '<option value="2">2 Star</option>';
        }

        if (optionsHtml) {
            optionsHtml = '<option selected>Select Star Rating</option>' + optionsHtml;
        } else {
            optionsHtml = '<option selected>Not enough gems</option>';
        }

        return optionsHtml;
    }

    function onStarRatingSelect(event) {
        const $target = $(event.target);
        const $parent = $($target.parent());
        $('.gem-select', $parent).html(createGemSelectOptions($target.val()));
    }

    function createGemSelectOptions(starRating) {
        let optionsHtml = '';
        for (const gem in gemInfo[starRating]) {
            if (selectedGems.includes(gem)) {
                continue;
            }

            if (Object.values(gemInfo[starRating][gem].rank).reduce((a, b) => a + b) > 0) {
                optionsHtml += '<option value="' + gem + '">' + gemInfo[starRating][gem].name + '</option>'
            }
        }

        optionsHtml = '<option selected>Select a Legendary Gem</option>' + optionsHtml;

        return optionsHtml;
    }

    function checkRequirements() {

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

    $(".img-tab")
        .on('mousedown', buttonPressed)
        .on('mouseup', buttonReleased)
        .on('touchstart', buttonPressed);

    $("#paypal-button")
        .on('mousedown', buttonPressed)
        .on('mouseup', buttonReleased);

    $('.upgrade-gem-btn')
        .on('click', onUpgrade)
        .on('mousedown', buttonPressed)
        .on('mouseup', buttonReleased)
        .on('touchstart', buttonPressed);

    $('.gem-select').on('change', onGemSelect);
    $('.star-rating-select').on('change', onStarRatingSelect);

    $('img[data-bs-toggle="tab"]').on('shown.bs.tab', function (event) {
        const $target = $(event.target);
        $('.img-tab').css('filter', 'brightness(100%)');
        $target.css('filter', 'brightness(200%)');

        $('.star-rating-select', $($target.attr('href'))).html(createStarRatingSelectOptions());
    });

    init();
})();
