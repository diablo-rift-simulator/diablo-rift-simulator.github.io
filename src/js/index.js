(function () {
    "use strict";

    let moneySpent = 0;

    let pitySystemActive = false;

    let resonance = 0;

    let gemPower = 0;

    let selectedGems = [];

    let gemInfo = {
        '1': {
            'gem/trickshot_gem': {
                name: 'Trickshot Gem',
                amount: 0
            },
            'gem/everlasting_torment': {
                name: 'Everlasting Torment',
                amount: 0
            },
            'gem/the_black_rose': {
                name: 'The Black Rose',
                amount: 0
            },
            'gem/chained_death': {
                name: 'Chained Death',
                amount: 0
            },
            'gem/berserkers_eye': {
                name: "Berserker's Eye",
                amount: 0
            },
            'gem/mocking_laughter': {
                name: 'Mocking Laughter',
                amount: 0
            },
            'gem/zod_stone': {
                name: 'Zod Stone',
                amount: 0
            },
            'gem/caarsens_invigoration': {
                name: "Caarsen's Invigoration",
                amount: 0
            },
            'gem/defiant_soul': {
                name: 'Defiant soul',
                amount: 0
            },
            'gem/freedom_and_devotion': {
                name: 'Freedom and Devotion',
                amount: 0
            },
            'gem/respite_stone': {
                name: 'Respite Stone',
                amount: 0
            },
            'gem/seleds_weakening': {
                name: "Seled's Weakening",
                amount: 0
            },
            'gem/pain_of_subjugation': {
                name: 'Pain of Subjugation',
                amount: 0
            },
            'gem/nightmare_wreath': {
                name: 'Nightmare Wreath',
                amount: 0
            },
        },
        '2': {
            'gem/power_and_command': {
                name: 'Power & Command',
                amount: 0
            },
            'gem/the_hunger': {
                name: 'The Hunger',
                amount: 0
            },
            'gem/bloody_reach': {
                name: 'Bloody Reach',
                amount: 0
            },
            'gem/cutthroats_grin': {
                name: 'Cutthroats Grin',
                amount: 0
            },
            'gem/lightning_core': {
                name: 'Lighting Core',
                amount: 0
            },
            'gem/followers_burden': {
                name: 'Followers Burden',
                amount: 0
            },
            'gem/unity_crystal': {
                name: 'Unity Crystal',
                amount: 0
            },
            'gem/battleguard': {
                name: 'Battleguard',
                amount: 0
            },
        },
        '2_5': {
            'gem/bottled_hope': {
                name: 'Bottled Hope',
                amount: 0
            },
            'gem/phoenix_ashes': {
                name: 'Phoenix Ashes',
                amount: 0
            },
            'gem/bsj': {
                name: 'Blood-Soaked Jade',
                amount: 0
            },
            'gem/chip_of_stoned_flesh': {
                name: 'Chip of Stoned Flesh',
                amount: 0
            },
            'gem/echoing_shade': {
                name: 'Echoing Shade',
                amount: 0
            },
            'gem/howlers_call': {
                name: "Howler\s Call",
                amount: 0
            },
            'gem/zwensons_haunting': {
                name: "Zwenson's Haunting",
                amount: 0
            },
            'gem/seeping_bile': {
                name: "Seeping Bile",
                amount: 0
            },
            'gem/blessing_of_the_worthy': {
                name: "Blessing of the Worthy",
                amount: 0
            },
        },
        '3_5': {
            'gem/bottled_hope': {
                name: 'Bottled Hope',
                amount: 0
            },
            'gem/phoenix_ashes': {
                name: 'Phoenix Ashes',
                amount: 0
            },
            'gem/bsj': {
                name: 'Blood-Soaked Jade',
                amount: 0
            },
            'gem/chip_of_stoned_flesh': {
                name: 'Chip of Stoned Flesh',
                amount: 0
            },
            'gem/echoing_shade': {
                name: 'Echoing Shade',
                amount: 0
            },
            'gem/howlers_call': {
                name: "Howler\s Call",
                amount: 0
            },
            'gem/zwensons_haunting': {
                name: "Zwenson's Haunting",
                amount: 0
            },
            'gem/seeping_bile': {
                name: "Seeping Bile",
                amount: 0
            },
            'gem/blessing_of_the_worthy': {
                name: "Blessing of the Worthy",
                amount: 0
            },
        },
        '4_5': {
            'gem/bottled_hope': {
                name: 'Bottled Hope',
                amount: 0
            },
            'gem/phoenix_ashes': {
                name: 'Phoenix Ashes',
                amount: 0
            },
            'gem/bsj': {
                name: 'Blood-Soaked Jade',
                amount: 0
            },
            'gem/chip_of_stoned_flesh': {
                name: 'Chip of Stoned Flesh',
                amount: 0
            },
            'gem/echoing_shade': {
                name: 'Echoing Shade',
                amount: 0
            },
            'gem/howlers_call': {
                name: "Howler\s Call",
                amount: 0
            },
            'gem/zwensons_haunting': {
                name: "Zwenson's Haunting",
                amount: 0
            },
            'gem/seeping_bile': {
                name: "Seeping Bile",
                amount: 0
            },
            'gem/blessing_of_the_worthy': {
                name: "Blessing of the Worthy",
                amount: 0
            },
        },
        '5_5': {
            'gem/bottled_hope': {
                name: 'Bottled Hope',
                amount: 0
            },
            'gem/phoenix_ashes': {
                name: 'Phoenix Ashes',
                amount: 0
            },
            'gem/bsj': {
                name: 'Blood-Soaked Jade',
                amount: 0
            },
            'gem/chip_of_stoned_flesh': {
                name: 'Chip of Stoned Flesh',
                amount: 0
            },
            'gem/echoing_shade': {
                name: 'Echoing Shade',
                amount: 0
            },
            'gem/howlers_call': {
                name: "Howler\s Call",
                amount: 0
            },
            'gem/zwensons_haunting': {
                name: "Zwenson's Haunting",
                amount: 0
            },
            'gem/seeping_bile': {
                name: "Seeping Bile",
                amount: 0
            },
            'gem/blessing_of_the_worthy': {
                name: "Blessing of the Worthy",
                amount: 0
            },
        },
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

    const $fiveStarCountMain = $('#five-star-count-main');

    const $consumeAllGems = $('#consume-all-gems');
    const $moneySpent = $('#money-spent');
    const $resonance = $('.resonance');
    const $gemPower = $('.gem-power');
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

        let gemName = '';

        switch (GEM_TYPES[index]) {
            case 1:
                $('#one-star-count').text(++gemCount["1"]);
                gemName = ONE_STAR_GEMS[Math.floor(Math.random() * ONE_STAR_GEMS.length)];
                gemInfo[1][gemName].amount++;

                return {
                    name: gemName,
                    rank: 1,
                    fiveStarGem: false
                };
            case 2:
                $('#two-star-count').text(++gemCount["2"]);
                gemName = TWO_STAR_GEMS[Math.floor(Math.random() * TWO_STAR_GEMS.length)];
                gemInfo[2][gemName].amount++;
                return {
                    name: gemName,
                    rank: 2,
                    fiveStarGem: false
                };
            case 5:
                const gemRank = determineGemRank();
                gemName = FIVE_STAR_GEMS[Math.floor(Math.random() * FIVE_STAR_GEMS.length)]
                gemInfo[gemRank + '_5'][gemName].amount++;
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
                    name: gemName,
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

    function calculateRankOneDuplicateAmount(name) {
        let rankOneDuplicateAmount = 0;
        ['2_5', '3_5', '4_5', '5_5'].map((star) => {
            rankOneDuplicateAmount += gemInfo[star][name].amount;
        });

        return rankOneDuplicateAmount;
    }

    function upgradeGem($target, name, stars, currentRank) {
        if (currentRank > 9) {
            return;
        }

        const $gemPowerForUpgrade = $('.gem-power-for-upgrade', $target);
        let rankOneDuplicateAmount;
        const fiveStarGems = ['2_5', '3_5', '4_5', '5_5'];
        if (fiveStarGems.includes(stars)) {
            rankOneDuplicateAmount = calculateRankOneDuplicateAmount(name);
        } else {
            rankOneDuplicateAmount = gemInfo[stars][name].amount;
        }
        switch (stars) {
            case '1': {
                switch (currentRank) {
                    case 1:
                        if (gemPower >= 1) {
                            autoFillGemPower(1);
                            updateGemRank($target, name, ++currentRank, stars);
                            $gemPowerForUpgrade.text(5);
                        }
                        break;
                    case 2:
                        if (gemPower >= 5) {
                            autoFillGemPower(5);
                            updateGemRank($target, name, ++currentRank, stars);
                            $gemPowerForUpgrade.text(10);
                        }
                        break;
                    case 3:
                        if (gemPower >= 10) {
                            autoFillGemPower(10);
                            updateGemRank($target, name, ++currentRank, stars);
                            $gemPowerForUpgrade.text(15);
                        }
                        break;
                    case 4:
                        if (gemPower >= 15) {
                            autoFillGemPower(15);
                            updateGemRank($target, name, ++currentRank, stars);
                            $gemPowerForUpgrade.text(20);
                        }
                        break;
                    case 5:
                        if (gemPower >= 20) {
                            autoFillGemPower(20);
                            updateGemRank($target, name, ++currentRank, stars);
                            updateRequirements($target, gemInfo[stars][name].amount, 1);
                            $gemPowerForUpgrade.text(25);
                        }
                        break;
                    case 6:
                        if (gemPower >= 25 && rankOneDuplicateAmount >= 1) {
                            gemInfo[stars][name].amount--;
                            autoFillGemPower(25);
                            updateGemRank($target, name, ++currentRank, stars);
                            $gemPowerForUpgrade.text(30);
                            updateRequirements($target, gemInfo[stars][name].amount, 1);
                        }
                        break;
                    case 7:
                        if (gemPower >= 30 && rankOneDuplicateAmount >= 1) {
                            gemInfo[stars][name].amount--;
                            autoFillGemPower(30);
                            updateGemRank($target, name, ++currentRank, stars);
                            $gemPowerForUpgrade.text(40);
                            updateRequirements($target, gemInfo[stars][name].amount, 1);
                        }
                        break;
                    case 8:
                        if (gemPower >= 40 && rankOneDuplicateAmount >= 1) {
                            gemInfo[stars][name].amount--;
                            autoFillGemPower(40);
                            updateGemRank($target, name, ++currentRank, stars);
                            $gemPowerForUpgrade.text(50);
                            updateRequirements($target, gemInfo[stars][name].amount, 1);
                        }
                        break;
                    case 9:
                        if (gemPower >= 50 && rankOneDuplicateAmount >= 1) {
                            gemInfo[stars][name].amount--;
                            autoFillGemPower(50);
                            updateGemRank($target, name, ++currentRank, stars);
                            $('.gem-upgrade-requirements', $target).hide();
                            $('.upgrade-gem-btn', $target).hide();
                            $('.gem-upgrade-arrow', $target).hide();
                            $('.gem-rank-next', $target).hide();
                        }
                }
                break;
            }
            case '2': {
                switch (currentRank) {
                    case 1:
                        if (gemPower >= 5) {
                            autoFillGemPower(1);
                            $gemPowerForUpgrade.text(15);
                            updateGemRank($target, name, ++currentRank, stars);
                        }
                        break;
                    case 2:
                        if (gemPower >= 15) {
                            autoFillGemPower(15);
                            $gemPowerForUpgrade.text(25);
                            updateRequirements($target, gemInfo[stars][name].amount, 1);
                            updateGemRank($target, name, ++currentRank, stars);
                        }
                        break;
                    case 3:
                        if (rankOneDuplicateAmount >= 1 && gemPower >= 25) {
                            gemInfo[stars][name].amount--;
                            autoFillGemPower(25);
                            updateGemRank($target, name, ++currentRank, stars);
                            $gemPowerForUpgrade.text(20);
                            updateRequirements($target, gemInfo[stars][name].amount, 2);
                        }
                        break;
                    case 4:
                        if (rankOneDuplicateAmount >= 2 && gemPower >= 25) {
                            gemInfo[stars][name].amount -= 2;
                            autoFillGemPower(20);
                            updateGemRank($target, name, ++currentRank, stars);
                            updateRequirements($target, gemInfo[stars][name].amount, 5);
                            $gemPowerForUpgrade.text(85);
                        }
                        break;
                    case 5:
                        if (rankOneDuplicateAmount >= 5 && gemPower >= 85) {
                            gemInfo[stars][name].amount -= 5;
                            autoFillGemPower(85);
                            updateRequirements($target, gemInfo[stars][name].amount, 5);
                            $gemPowerForUpgrade.text(85);
                            updateGemRank($target, name, ++currentRank, stars);
                        }
                        break;
                    case 6:
                        if (rankOneDuplicateAmount >= 5 && gemPower >= 85) {
                            gemInfo[stars][name].amount -= 5;
                            autoFillGemPower(25);
                            $gemPowerForUpgrade.text(105);
                            updateRequirements($target, gemInfo[stars][name].amount, 6);
                            updateGemRank($target, name, ++currentRank, stars);
                        }
                        break;
                    case 7:
                        if (rankOneDuplicateAmount >= 6 && gemPower >= 105) {
                            gemInfo[stars][name].amount -= 6;
                            autoFillGemPower(30);
                            $gemPowerForUpgrade.text(150);
                            updateRequirements($target, gemInfo[stars][name].amount, 9);
                            updateGemRank($target, name, ++currentRank, stars);
                        }
                        break;
                    case 8:
                        if (rankOneDuplicateAmount >= 9 && gemPower >= 150) {
                            gemInfo[stars][name].amount -= 9;
                            autoFillGemPower(40);
                            $gemPowerForUpgrade.text(195);
                            updateRequirements($target, gemInfo[stars][name].amount, 12);
                            updateGemRank($target, name, ++currentRank, stars);
                        }
                        break;
                    case 9:
                        if (rankOneDuplicateAmount >= 12 && gemPower >= 195) {
                            gemInfo[stars][name].amount -= 12;
                            autoFillGemPower(1);
                            updateGemRank($target, name, ++currentRank, stars);
                            $('.gem-upgrade-requirements', $target).hide();
                            $('.upgrade-gem-btn', $target).hide();
                            $('.gem-upgrade-arrow', $target).hide();
                            $('.gem-rank-next', $target).hide();
                        }
                }
                break;
            }
            case '2_5':
            case '3_5':
            case '4_5':
            case '5_5': {
                switch (currentRank) {
                    case 1:
                        if (gemPower >= 50) {
                            autoFillGemPower(50);
                            updateRequirements($target, gemInfo[stars][name].amount, 1);
                            $gemPowerForUpgrade.text(75);
                            updateGemRank($target, name, ++currentRank, stars);
                        }
                        break;
                    case 2:
                        if (rankOneDuplicateAmount >= 1 && gemPower >= 75) {
                            consumeRankOneDuplicates(1, name, stars);
                            autoFillGemPower(75);
                            $gemPowerForUpgrade.text(100);
                            updateRequirements($target, gemInfo[stars][name].amount, 1);
                            updateGemRank($target, name, ++currentRank, stars);
                        }
                        break;
                    case 3:
                        if (rankOneDuplicateAmount >= 1 && gemPower >= 100) {
                            consumeRankOneDuplicates(1, name, stars);
                            autoFillGemPower(100);
                            $gemPowerForUpgrade.text(250);
                            updateRequirements($target, gemInfo[stars][name].amount, 5);
                            updateGemRank($target, name, ++currentRank, stars);
                        }
                        break;
                    case 4:
                        if (rankOneDuplicateAmount >= 5 && gemPower >= 250) {
                            consumeRankOneDuplicates(5, name, stars);
                            autoFillGemPower(250);
                            updateRequirements($target, gemInfo[stars][name].amount, 6);
                            $gemPowerForUpgrade.text(375);
                            updateGemRank($target, name, ++currentRank, stars);
                        }
                        break;
                    case 5:
                        if (rankOneDuplicateAmount >= 6 && gemPower >= 375) {
                            consumeRankOneDuplicates(6, name, stars);
                            autoFillGemPower(375);
                            updateRequirements($target, gemInfo[stars][name].amount, 12);
                            $gemPowerForUpgrade.text(725);
                            updateGemRank($target, name, ++currentRank, stars);
                        }
                        break;
                    case 6:
                        if (rankOneDuplicateAmount >= 12 && gemPower >= 725) {
                            consumeRankOneDuplicates(12, name, stars);
                            autoFillGemPower(725);
                            $gemPowerForUpgrade.text(725);
                            updateRequirements($target, gemInfo[stars][name].amount, 12);
                            updateGemRank($target, name, ++currentRank, stars);
                        }
                        break;
                    case 7:
                        if (rankOneDuplicateAmount >= 12 && gemPower >= 725) {
                            consumeRankOneDuplicates(12, name, stars);
                            autoFillGemPower(725);
                            $gemPowerForUpgrade.text(1075);
                            updateRequirements($target, gemInfo[stars][name].amount, 18);
                            updateGemRank($target, name, ++currentRank, stars);
                        }
                        break;
                    case 8:
                        if (rankOneDuplicateAmount >= 18 && gemPower >= 1075) {
                            consumeRankOneDuplicates(18, name, stars);
                            autoFillGemPower(1075);
                            $gemPowerForUpgrade.text(1075);
                            updateRequirements($target, gemInfo[stars][name].amount, 18);
                            updateGemRank($target, name, ++currentRank, stars);
                        }
                        break;
                    case 9:
                        if (rankOneDuplicateAmount >= 18 && gemPower >= 1075) {
                            consumeRankOneDuplicates(18, name, stars);
                            autoFillGemPower(1075);
                            updateGemRank($target, name, ++currentRank, stars);
                            $('.gem-upgrade-requirements', $target).hide();
                            $('.upgrade-gem-btn', $target).hide();
                            $('.gem-upgrade-arrow', $target).hide();
                            $('.gem-rank-next', $target).hide();
                        }
                }
            }
        }

        if (fiveStarGems.includes(stars)) {
            rankOneDuplicateAmount = calculateRankOneDuplicateAmount(name);
        } else {
            rankOneDuplicateAmount = gemInfo[stars][name].amount;
        }

        updateRequirements($target, rankOneDuplicateAmount, 99);

        return currentRank;
    }

    function updateAllRequirements() {
        $('.gem-upgrade-wrapper').each((index) => {
            const $target = $('.gem-upgrade-wrapper')[index];
            const gemName = $('.upgrade-gem-btn', $target).attr('data-gem-name');

            if (!gemName) {
                return;
            }
            const stars = $('.upgrade-gem-btn', $target).attr('data-gem-stars');
            let rankOneDuplicateAmount = 0;
            const fiveStarGems = ['2_5', '3_5', '4_5', '5_5'];
            if (fiveStarGems.includes(stars)) {
                rankOneDuplicateAmount = calculateRankOneDuplicateAmount(gemName);
            } else {
                rankOneDuplicateAmount = gemInfo[stars][gemName].amount;
            }
            updateRequirements($target, rankOneDuplicateAmount, 99)
        });
    }

    function consumeRankOneDuplicates(rankOneDuplicatesRequired, gemName, stars) {
        const fiveStarGems = ['2_5', '3_5', '4_5', '5_5'];

        if (fiveStarGems.includes(stars)) {
            fiveStarGems.map((star) => {
                if (rankOneDuplicatesRequired === 0) {
                    return;
                }

                if (rankOneDuplicatesRequired - gemInfo[star][gemName].amount < 0) {
                    gemInfo[star][gemName].amount = (rankOneDuplicatesRequired - gemInfo[star][gemName].amount) * -1;
                    rankOneDuplicatesRequired = 0;
                    return;
                }

                if (rankOneDuplicatesRequired - gemInfo[star][gemName].amount >= 0) {
                    rankOneDuplicatesRequired = rankOneDuplicatesRequired - gemInfo[star][gemName].amount;
                    gemInfo[star][gemName].amount = 0;
                }
            });
        }
    }

    function autoFillGemPower(gemPowerToSubtract) {
        $gemPower.text(gemPower -= gemPowerToSubtract);
    }

    function updateGemRank($target, name, rank) {
        $('.gem-rank', $target).text(rank);
        $('.gem-rank-next', $target).text(rank + 1);
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
        const stars = $target.attr('data-gem-stars');
        const currentRank = upgradeGem(
            $($target.parent().parent()),
            $target.attr('data-gem-name'),
            stars,
            originalRank
        );
        $target.attr('data-gem-rank', currentRank);

        if (currentRank > originalRank) {
            switch (stars) {
                case '1': {
                    $resonance.text(resonance += 15);
                    break;
                }
                case '2': {
                    $resonance.text(resonance += 30);
                    break;
                }
                case '2_5': {
                    if (currentRank < 4) {
                        $resonance.text(resonance += 80);
                    } else {
                        $resonance.text(resonance += 90);
                    }
                    break;
                }
                case '3_5': {
                    if (currentRank < 3) {
                        $resonance.text(resonance += 80);
                    } else {
                        $resonance.text(resonance += 90);
                    }
                    break;
                }
                case '4_5': {
                    $resonance.text(resonance += 90);
                    break;
                }
                case '5_5': {
                    $resonance.text(resonance += 100);
                    break;
                }
            }
        }
    }

    function onGemSelect(event) {
        const $target = $(event.target);
        const $parent = $($target.parent());
        const selectedGemName = $target.val();
        const selectedGemFullName = $('option:selected', $target).text();
        const starRating = $('.star-rating-select', $parent).val();
        $target.css('background-image', 'none')
        $('.gem-icon', $parent).attr('src', 'assets/' + selectedGemName + '.webp')
        $('.gem-upgrade-wrapper', $parent).show();
        $target.attr('disabled', 'disabled');

        $('.upgrade-gem-btn', $parent).attr('data-gem-name', selectedGemName);
        $('.upgrade-gem-btn', $parent).attr('data-gem-stars', starRating);

        $('.star-rating-select', $parent).remove();
        const $gemPowerForUpgrade = $('.gem-power-for-upgrade', $parent);
        switch (starRating) {
            case '1': {
                $resonance.text(resonance += 15);
                $gemPowerForUpgrade.text(1);
                break;
            }
            case '2': {
                $resonance.text(resonance += 30);
                $gemPowerForUpgrade.text(5);
                break;
            }
            case '2_5': {
                $resonance.text(resonance += 30);
                $gemPowerForUpgrade.text(50);
                break;
            }
            case '3_5': {
                $resonance.text(resonance += 60);
                $gemPowerForUpgrade.text(50);
                break;
            }
            case '4_5': {
                $resonance.text(resonance += 90);
                $gemPowerForUpgrade.text(50);
                break;
            }
            case '5_5': {
                $resonance.text(resonance += 100);
                $gemPowerForUpgrade.text(50);
            }
        }

        if (gemInfo[starRating][selectedGemName].amount >= 1) {
            gemInfo[starRating][selectedGemName].amount--;
        }

        selectedGems.push(selectedGemName);

        $('.gem-name', $parent).text(selectedGemFullName);
        $('.gem-name', $parent).show();
        $target.remove();
    }

    function gemOfStarAmountExist(stars) {
        for (const gemName in gemInfo[stars]) {
            if (gemInfo[stars][gemName].amount > 0) {
                return true;
            }
        }
        return false;
    }

    function createStarRatingSelectOptions() {
        let optionsHtml = '';


        if (gemOfStarAmountExist('1')) {
            optionsHtml += '<option value="1">1 Star</option>';
        }

        if (gemOfStarAmountExist('2')) {
            optionsHtml += '<option value="2">2 Star</option>';
        }

        if (gemOfStarAmountExist('2_5')) {
            optionsHtml += '<option value="2_5">2/5 Star</option>';
        }

        if (gemOfStarAmountExist('3_5')) {
            optionsHtml += '<option value="3_5">3/5 Star</option>';
        }

        if (gemOfStarAmountExist('4_5')) {
            optionsHtml += '<option value="4_5">4/5 Star</option>';
        }

        if (gemOfStarAmountExist('5_5')) {
            optionsHtml += '<option value="5_5">5/5 Star</option>';
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
        $('.gem-select', $parent).prop('disabled', false);

        switch ($target.val()) {
            case '1': {
                $('.col-stars', $parent).html('<i class="fa-solid fa-star yellow-star col"></i>')
                break;
            }
            case '2': {
                $('.col-stars', $parent).html('<i class="fa-solid fa-star yellow-star col"></i>'.repeat(2))
                break;
            }
            case '2_5': {
                $('.col-stars', $parent).html(
                    '<i class="fa-solid fa-star yellow-star col"></i>'.repeat(2) +
                    '<i class="fa-solid fa-star col" style="color: white;"></i>'.repeat(3)
                );
                break;
            }
            case '3_5': {
                $('.col-stars', $parent).html(
                    '<i class="fa-solid fa-star yellow-star col"></i>'.repeat(3) +
                    '<i class="fa-solid fa-star col" style="color: white;"></i>'.repeat(2)
                );
                break;
            }
            case '4_5': {
                $('.col-stars', $parent).html(
                    '<i class="fa-solid fa-star yellow-star col"></i>'.repeat(4) +
                    '<i class="fa-solid fa-star col" style="color: white;"></i>'
                );
                break;
            }
            case '5_5': {
                $('.col-stars', $parent).html('<i class="fa-solid fa-star yellow-star col"></i>'.repeat(5));
            }
        }
    }

    function createGemSelectOptions(starRating) {
        let optionsHtml = '';

        for (const gem in gemInfo[starRating]) {
            if (selectedGems.includes(gem)) {
                continue;
            }

            if (gemInfo[starRating][gem].amount > 0) {
                optionsHtml += '<option value="' + gem + '">' + gemInfo[starRating][gem].name + '</option>'
            }
        }

        optionsHtml = '<option selected>Select a Legendary Gem</option>' + optionsHtml;

        return optionsHtml;
    }

    function updateRequirements($target, duplicatesAvailable, duplicatesAmount) {
        if (!duplicatesAmount) {
            $('.duplicates-wrapper', $target).hide();
            return;
        }
        if (duplicatesAmount === 99) {
            $('.duplicates-available', $target).text(duplicatesAvailable);
            return;
        }
        let requirementsHtml = '<span class="duplicates-available">' + duplicatesAvailable + '</span>/' + duplicatesAmount + ' Rank 1 duplicates';
        $('.duplicates-wrapper', $target).html(requirementsHtml);
        $('.duplicates-wrapper', $target).show();
    }

    function renderInventory() {
        let inventoryHtml = '';
        Object.keys(gemInfo).reverse().forEach((star) => {
            for (const gemName in gemInfo[star]) {
                let starsHtml = '';
                switch (star) {
                    case '1': {
                        starsHtml = '<i class="fa-solid fa-star yellow-star col"></i>';
                        break;
                    }
                    case '2': {
                        starsHtml = '<i class="fa-solid fa-star yellow-star col"></i>'.repeat(2);
                        break;
                    }
                    case '2_5': {
                        starsHtml = '<i class="fa-solid fa-star yellow-star col"></i>'.repeat(2) +
                            '<i class="fa-solid fa-star col" style="color: white;"></i>'.repeat(3);
                        break;
                    }
                    case '3_5': {
                        starsHtml = '<i class="fa-solid fa-star yellow-star col"></i>'.repeat(3) +
                            '<i class="fa-solid fa-star col" style="color: white;"></i>'.repeat(2);
                        break;
                    }
                    case '4_5': {
                        starsHtml = '<i class="fa-solid fa-star yellow-star col"></i>'.repeat(4) +
                            '<i class="fa-solid fa-star col" style="color: white;"></i>'.repeat(1);
                        break;
                    }
                    case '5_5': {
                        starsHtml = '<i class="fa-solid fa-star yellow-star col"></i>'.repeat(5);
                    }
                }
                if (gemInfo[star][gemName].amount > 0) {
                    inventoryHtml += '<div class="inventory-content"><button data-gem-name="' + gemName + '" data-gem-stars="' + star + '" type="button" class="btn btn-xs consume-gem-btn" style="color: red; padding: 0; font-size: 14px !important;">Consume</button><img src="assets/gem_upgrade/'
                        + gemName + '.webp" style="height: 40px; width: 40px; border-radius: 25px; display: inline" alt=""/><span>  '
                        + gemInfo[star][gemName].name + ' ' + starsHtml + '</span>'
                        + '<span class="inventory-gem-count"> x' + gemInfo[star][gemName].amount
                        + '</span></div>';
                }
            }
        })
        $('#inventory-body').html(inventoryHtml);
    }


    if (window.matchMedia("(max-width: 1200px)").matches) {
        const $statsWrapper = $('#stats-wrapper');
        $('#stats-modal-content').append($statsWrapper.html());
        $statsWrapper.remove();
    } else {
        $('#statistics-tab').remove();
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

    $('.upgrade-gem-btn')
        .on('click', onUpgrade)
        .on('mousedown', buttonPressed)
        .on('mouseup', buttonReleased)
        .on('touchstart', buttonPressed);

    $('.gem-select').on('change', onGemSelect);
    $('.star-rating-select').on('change', onStarRatingSelect);

    $('img[data-bs-toggle="tab"]')
        .on('shown.bs.tab', function (event) {
            const $target = $(event.target);
            $target.css('filter', 'brightness(200%)');
            if ($target.attr('href') === '#inventory') {
                renderInventory();
            }
            if ($target.attr('href') === '#gem-upgrade') {
                updateAllRequirements();
            }
            $('.star-rating-select', $($target.attr('href'))).html(createStarRatingSelectOptions());
        })
        .on('hidden.bs.tab', function (event) {
            const $target = $(event.target);
            $target.css('filter', 'brightness(100%)');
        });


    $(document.body).on('click', function (event) {
        const $target = $(event.target);
        if ($target.hasClass('consume-gem-btn')) {
            const $parent = $($target.parent());
            const stars = $target.attr('data-gem-stars');
            const name = $target.attr('data-gem-name');

            let gemPowerPerGem;
            if (stars === '1') {
                gemPowerPerGem = 1;
            } else if (stars === '2') {
                gemPowerPerGem = 4;
            } else {
                gemPowerPerGem = 32;
            }

            if ($consumeAllGems.prop("checked")) {
                $gemPower.text(gemPower += (gemPowerPerGem * gemInfo[stars][name].amount));
                gemInfo[stars][name].amount = 0;
            } else {
                gemInfo[stars][name].amount--;
                $gemPower.text(gemPower += gemPowerPerGem)
            }

            if (gemInfo[stars][name].amount === 0) {
                $parent.remove();
                return;
            }

            $('.inventory-gem-count', $parent).text('x' + gemInfo[stars][name].amount);
        }
    });

    $(window).on('shown.bs.modal', function () {
        $('.star-rating-select').html(createStarRatingSelectOptions());
        renderInventory();
        updateAllRequirements();
    });

    $(document).ready(() => {
        $('#gem-upgrade-modal').modal({
            backdrop: 'static',
            keyboard: false
        });
        $('#news-modal').modal('show');
    });

    init();
})();
