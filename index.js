(function () {
    "use strict";

    let five_star_gem_count = 0;

    let money_spent = 0;

    const gem_types = [1, 2, 5];

    const gem_probabilities = [0.754, 0.201, 0.045];

    const five_star_gem_types = [2, 3, 4, 5]

    const five_star_probabilities = [0.75, 0.2, 0.04, 0.01];

    const one_star_gems = [
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

    const two_star_gems = [
        'gem/power_and_command',
        'gem/the_hunger',
        'gem/fervent_fang',
        'gem/bloody_reach',
        'gem/cutthroats_grin',
        'gem/chained_death',
        'gem/lightning_core',
        'gem/battleguard',
        'gem/followers_burden',
        'gem/unity_crystal',
    ];

    const five_star_gems = [
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

    const doors = document.querySelectorAll(".door");
    document.querySelector("#spinner").addEventListener("click", spin);

    async function spin() {
        money_spent += 25;
        document.getElementById('money_spent').innerText = money_spent;
        init(false, 1, 2);
        for (const door of doors) {
            const boxes = door.querySelector(".boxes");
            const duration = parseInt(boxes.style.transitionDuration);
            boxes.style.transform = "translateY(0)";
            await new Promise((resolve) => {
                setTimeout(resolve, duration * 100);
                // door.parentElement.querySelector('#stars').style.display = 'block';
            });
        }
        for (const door of doors) {
            await new Promise((resolve) => {
                setTimeout(resolve, 200);
                door.parentElement.querySelector('#stars').style.display = 'block';
            });
        }
    }

    function init(firstInit = true, groups = 1, duration = 1) {
        for (const door of doors) {
            if (firstInit) {
                door.dataset.spinned = "0";
            }

            const boxes = door.querySelector(".boxes");
            const boxesClone = boxes.cloneNode(false);

            let pool = [
                'crest',
                'gem/trickshot_gem',
                'gem/everlasting_torment',
                'gem/the_black_rose',
                'gem/seleds_weakening',
                'gem/everlasting_torment',
                'gem/chained_death',
                'gem/berserkers_eye',
                'gem/mocking_laughter',
                'gem/zod_stone',
                'gem/bottled_hope',
                'gem/phoenix_ashes',
                'gem/bsj',
                'gem/chip_of_stoned_flesh',
                'gem/echoing_shade',
                'gem/power_and_command',
                'gem/the_hunger',
                'gem/fervent_fang',
                'gem/bloody_reach',
                'gem/cutthroats_grin',
                'gem/chained_death',
                'gem/lightning_core',
                'gem/battleguard',
                'gem/followers_burden',
                'gem/unity_crystal',
                'gem/howlers_call',
                'gem/zwensons_haunting',
                'gem/seeping_bile',
                'gem/blessing_of_the_' +
                'worthy',
                'gem/caarsens_invigoration',
                'gem/defiant_soul',
                'gem/freedom_and_devotion',
                'gem/nightmare_wreath',
                'gem/respite_stone',
                'gem/seleds_weakening',
                'gem/pain_of_subjugation',
            ];
            let gem = {rank: 5};
            if (!firstInit) {
                gem = pickGem();
                pool.push(gem.name);
                boxesClone.addEventListener(
                    "transitionstart",
                    function () {
                        door.dataset.spinned = "1";
                        this.querySelectorAll(".box").forEach((box) => {
                            box.style.filter = "blur(1px)";
                        });
                    },
                    {once: true}
                );

                boxesClone.addEventListener(
                    "transitionend",
                    function () {
                        this.querySelectorAll(".box").forEach((box, index) => {
                            box.style.filter = "blur(0)";
                            if (index > 0) this.removeChild(box);
                        });
                    },
                    {once: true}
                );
            }

            for (let i = pool.length - 1; i >= 0; i--) {
                const box = document.createElement("div");
                box.classList.add("box");
                box.style.width = door.clientWidth + "px";
                box.style.height = door.clientHeight + "px";
                box.innerHTML = '<img src="' + pool[i] + '.webp' + '" alt=""/>';
                if (!firstInit) {
                    box.innerHTML = '<img src="' + pool[i] + '.webp' + '" alt=""/>';
                }
                boxesClone.appendChild(box);
            }

            boxesClone.style.transitionDuration = `${duration > 0 ? duration : 1}s`;
            boxesClone.style.transform = `translateY(-${
                door.clientHeight * (pool.length - 1)
            }px)`;
            door.replaceChild(boxesClone, boxes);

            if (!firstInit) {
                let stars = door.parentElement.querySelector('#stars');
                if (stars === null) {
                    stars = document.createElement("div");
                } else {
                    door.parentElement.removeChild(stars);
                }
                stars = document.createElement("div");
                stars.style.fontSize = 'medium';
                stars.style.position = 'absolute';
                stars.style.display = 'none';
                stars.id = 'stars';
                stars.innerHTML = '&nbsp&nbsp&nbsp&nbsp' + '⭐'.repeat(gem.rank);
                door.parentElement.appendChild(stars)
            }
        }
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
        const index = Math.floor(distribution.length * Math.random());  // random index
        return distribution[index];
    };

    function determineGemRank() {
        const distribution = createDistribution(five_star_gem_types, five_star_probabilities, 10);
        const index = randomIndex(distribution);

        return five_star_gem_types[index];
    }

    function pickGem() {
        const distribution = createDistribution(gem_types, gem_probabilities, 10);
        const index = randomIndex(distribution);
        switch (gem_types[index]) {
            case 1:
                return {
                    name: one_star_gems[Math.floor(Math.random() * one_star_gems.length)],
                    rank: 1
                };
            case 2:
                return {
                    name: two_star_gems[Math.floor(Math.random() * two_star_gems.length)],
                    rank: 2
                };
            case 5:
                const gemRank = determineGemRank();
                console.log(gemRank);
                if (gemRank === 5) {
                    document.getElementById('five_start_gems_amount').innerText = ++five_star_gem_count;
                }

                return {
                    name: five_star_gems[Math.floor(Math.random() * five_star_gems.length)],
                    rank: gemRank
                };
        }
    }

    init();
})();
