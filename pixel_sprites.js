/**
 * RPG Quest Todo - Stitch 16-Bit Character Evolution & Accessory Renderer
 * Uses the authentic Stitch 16-bit pixel-art character illustrations
 * (assets/characters/{classId}_t{1..7}.png) as the core visual foundation,
 * adding sub-stage (초급/중급/고급 & 강림/불멸/태초/창세) 16-bit pixel effects
 * and anatomically anchored 16-bit pixel accessories worn directly on the character.
 */
(function () {
  function getTierAndSub(stageNum) {
    if (stageNum <= 2) return { tier: 1, sub: stageNum };          // Stage 1-2: 초급, 중급
    if (stageNum <= 4) return { tier: 2, sub: stageNum - 2 };      // Stage 3-4: 초급, 고급
    if (stageNum <= 7) return { tier: 3, sub: stageNum - 4 };      // Stage 5-7: 초급, 중급, 고급
    if (stageNum <= 10) return { tier: 4, sub: stageNum - 7 };     // Stage 8-10: 초급, 중급, 고급
    if (stageNum <= 13) return { tier: 5, sub: stageNum - 10 };    // Stage 11-13: 초급, 중급, 고급
    if (stageNum <= 16) return { tier: 6, sub: stageNum - 13 };    // Stage 14-16: 초급, 중급, 고급
    return { tier: 7, sub: stageNum - 16 };                        // Stage 17-20: 강림, 불멸, 태초, 창세
  }

  // Exact anatomical anchors (in 0..100 coordinate space) for each Stitch character sprite
  function getAnchors(classId, tier) {
    if (classId === 'warrior') {
      return { headX: 49, headY: 14, eyeX: 49, eyeY: 26, neckX: 49, neckY: 36, backX: 49, backY: 36, handX: 25, handY: 46 };
    }
    if (classId === 'archer') {
      return { headX: 48, headY: 16, eyeX: 49, eyeY: 28, neckX: 49, neckY: 37, backX: 47, backY: 38, handX: 66, handY: 50 };
    }
    if (classId === 'mage') {
      return { headX: 50, headY: 16, eyeX: 51, eyeY: 29, neckX: 51, neckY: 38, backX: 50, backY: 39, handX: 68, handY: 45 };
    }
    // Beast anatomical anchors per Stitch evolution form
    if (tier === 1) {
      return { headX: 50, headY: 31, eyeX: 50, eyeY: 47, neckX: 51, neckY: 60, backX: 50, backY: 52, handX: 63, handY: 66 };
    }
    if (tier === 2) {
      return { headX: 63, headY: 20, eyeX: 65, eyeY: 35, neckX: 64, neckY: 57, backX: 48, backY: 42, handX: 74, handY: 75 };
    }
    if (tier === 3) {
      return { headX: 63, headY: 18, eyeX: 63, eyeY: 29, neckX: 69, neckY: 51, backX: 50, backY: 42, handX: 78, handY: 75 };
    }
    if (tier === 4) {
      return { headX: 36, headY: 22, eyeX: 38, eyeY: 38, neckX: 35, neckY: 56, backX: 52, backY: 38, handX: 48, handY: 72 };
    }
    return { headX: 30, headY: 31, eyeX: 30, eyeY: 40, neckX: 29, neckY: 55, backX: 50, backY: 42, handX: 38, handY: 72 };
  }

  // Theme colors per class & tier for sub-stage pixel effects
  function getTierTheme(classId, tier) {
    const map = {
      warrior: ['#f97316', '#38bdf8', '#ef4444', '#22d3ee', '#fde047', '#ef4444', '#fbbf24'],
      archer:  ['#34d399', '#fbbf24', '#10b981', '#38bdf8', '#fde047', '#e879f9', '#fbbf24'],
      mage:    ['#38bdf8', '#f43f5e', '#a855f7', '#22d3ee', '#ef4444', '#fbbf24', '#fde047'],
      beast:   ['#38bdf8', '#fbbf24', '#22d3ee', '#38bdf8', '#34d399', '#ef4444', '#fde047']
    };
    const arr = map[classId] || map.warrior;
    return arr[Math.max(0, Math.min(6, tier - 1))];
  }

  // Sub-stage (초급 ➔ 중급 ➔ 고급 / 강림 ➔ 불멸 ➔ 태초 ➔ 창세) 16-bit pixel effects around the Stitch sprite
  function renderSubStagePixelFX(classId, tier, sub, anchors) {
    const color = getTierTheme(classId, tier);
    const parts = [];

    // Sub 2+ (중급 / 불멸 이상): Add pixel rune crest & weapon/spirit resonance particles
    if (sub >= 2) {
      parts.push(`
        <!-- 중급+ 16-Bit Pixel Energy Particles -->
        <g class="animate-pulse">
          <rect x="8" y="22" width="3" height="3" fill="${color}" />
          <rect x="9" y="21" width="1" height="5" fill="#ffffff" />
          <rect x="88" y="24" width="3" height="3" fill="${color}" />
          <rect x="89" y="23" width="1" height="5" fill="#ffffff" />
          <rect x="12" y="76" width="2" height="2" fill="#fde047" />
          <rect x="85" y="74" width="2" height="2" fill="#fde047" />
        </g>
      `);
      // Weapon / Spirit Gem Awakening Glint at sub >= 2
      parts.push(`
        <g transform="translate(${anchors.handX}, ${anchors.handY})">
          <rect x="-4" y="-1" width="8" height="2" fill="${color}" opacity="0.9"/>
          <rect x="-1" y="-4" width="2" height="8" fill="#ffffff" opacity="0.9"/>
        </g>
      `);
    }

    // Sub 3+ (고급 / 태초 이상): Add Grand 16-Bit Awakening Aura & Floating Pixel Relics
    if (sub >= 3) {
      parts.push(`
        <!-- 고급+ 16-Bit Sacred Awakening Ring & Corner Runes -->
        <g opacity="0.92">
          <circle cx="50" cy="50" r="45" fill="none" stroke="${color}" stroke-width="1.5" stroke-dasharray="4 3" />
          <rect x="48" y="3" width="4" height="4" fill="#fde047" stroke="#090d16" stroke-width="0.8" />
          <rect x="48" y="93" width="4" height="4" fill="#fde047" stroke="#090d16" stroke-width="0.8" />
          <rect x="3" y="48" width="4" height="4" fill="${color}" stroke="#090d16" stroke-width="0.8" />
          <rect x="93" y="48" width="4" height="4" fill="${color}" stroke="#090d16" stroke-width="0.8" />
          <!-- Floating Pixel Crown Sparkles -->
          <rect x="${anchors.headX - 16}" y="${Math.max(4, anchors.headY - 4)}" width="3" height="3" fill="#fde047" />
          <rect x="${anchors.headX + 13}" y="${Math.max(4, anchors.headY - 4)}" width="3" height="3" fill="#fde047" />
        </g>
      `);
    }

    // Sub 4 (창세/절대 - Stage 20 Final Mythic Awakening): Genesis Sovereign Halo & 4 Corner Relics
    if (sub >= 4) {
      parts.push(`
        <!-- 창세/절대 Mythic Sovereign Resonance -->
        <g>
          <circle cx="50" cy="50" r="47.5" fill="none" stroke="#fde047" stroke-width="1.8" stroke-dasharray="6 2" />
          <polygon points="50,1 53,6 50,9 47,6" fill="#ffffff" stroke="#fbbf24" stroke-width="0.8" />
          <polygon points="10,10 14,12 10,15 7,12" fill="#38bdf8" stroke="#fde047" stroke-width="0.8" />
          <polygon points="90,10 93,12 90,15 86,12" fill="#38bdf8" stroke="#fde047" stroke-width="0.8" />
          <polygon points="10,88 14,90 10,93 7,90" fill="#e879f9" stroke="#fde047" stroke-width="0.8" />
          <polygon points="90,88 93,90 90,93 86,90" fill="#e879f9" stroke="#fde047" stroke-width="0.8" />
        </g>
      `);
    }

    return parts.join('');
  }

  // Crisp 16-bit pixel accessories worn directly ON the Stitch character's body
  function renderEquippedAccessorySVG(equippedAcc, anchors) {
    if (!equippedAcc) return { behind: '', front: '' };

    const { headX, headY, eyeX, eyeY, neckX, neckY, backX, backY, handX, handY } = anchors;

    switch (equippedAcc) {
      case 'crown':
        return {
          behind: '',
          front: `
            <g transform="translate(${headX - 11}, ${Math.max(2, headY - 9)})" shape-rendering="crispEdges">
              <rect x="2" y="8" width="18" height="4" fill="#090d16"/>
              <rect x="3" y="4" width="16" height="7" fill="#fbbf24"/>
              <rect x="3" y="2" width="3" height="3" fill="#fde047"/>
              <rect x="9" y="0" width="4" height="5" fill="#fde047"/>
              <rect x="16" y="2" width="3" height="3" fill="#fde047"/>
              <rect x="5" y="7" width="2" height="2" fill="#ef4444"/>
              <rect x="10" y="6" width="2" height="3" fill="#38bdf8"/>
              <rect x="15" y="7" width="2" height="2" fill="#10b981"/>
            </g>`
        };

      case 'halo':
        return {
          behind: '',
          front: `
            <g transform="translate(${headX - 14}, ${Math.max(1, headY - 10)})" shape-rendering="crispEdges">
              <rect x="4" y="2" width="20" height="2" fill="#fde047"/>
              <rect x="2" y="4" width="3" height="3" fill="#fbbf24"/>
              <rect x="23" y="4" width="3" height="3" fill="#fbbf24"/>
              <rect x="4" y="6" width="20" height="2" fill="#f59e0b"/>
              <rect x="8" y="1" width="12" height="1" fill="#ffffff"/>
            </g>`
        };

      case 'cat_ears':
        return {
          behind: '',
          front: `
            <g transform="translate(${headX - 13}, ${Math.max(2, headY - 7)})" shape-rendering="crispEdges">
              <polygon points="1,9 5,0 10,8" fill="#f472b6" stroke="#090d16" stroke-width="1.2"/>
              <polygon points="3,8 5,3 8,8" fill="#fbcfe8"/>
              <polygon points="16,8 21,0 25,9" fill="#f472b6" stroke="#090d16" stroke-width="1.2"/>
              <polygon points="18,8 21,3 23,8" fill="#fbcfe8"/>
            </g>`
        };

      case 'sunglasses':
        return {
          behind: '',
          front: `
            <g transform="translate(${eyeX - 12}, ${eyeY - 3})" shape-rendering="crispEdges">
              <rect x="0" y="0" width="24" height="2" fill="#090d16"/>
              <rect x="1" y="2" width="9" height="5" fill="#090d16"/>
              <rect x="14" y="2" width="9" height="5" fill="#090d16"/>
              <rect x="2" y="2" width="3" height="2" fill="#38bdf8"/>
              <rect x="15" y="2" width="3" height="2" fill="#38bdf8"/>
            </g>`
        };

      case 'charm':
        return {
          behind: '',
          front: `
            <g transform="translate(${neckX - 9}, ${neckY - 2})" shape-rendering="crispEdges">
              <path d="M2,0 L6,7 L12,7 L16,0" fill="none" stroke="#fbbf24" stroke-width="2"/>
              <rect x="6" y="6" width="6" height="6" fill="#090d16"/>
              <rect x="7" y="7" width="4" height="4" fill="#10b981"/>
              <rect x="8" y="8" width="2" height="2" fill="#a7f3d0"/>
            </g>`
        };

      case 'wings':
        return {
          behind: '',
          front: `
            <g transform="translate(${backX}, ${backY})" shape-rendering="crispEdges" opacity="0.95">
              <polygon points="-10,0 -34,-16 -38,-4 -28,12 -12,8" fill="#ffffff" stroke="#38bdf8" stroke-width="1.5"/>
              <polygon points="-12,2 -28,-10 -24,6 -12,6" fill="#e0f2fe"/>
              <polygon points="10,0 34,-16 38,-4 28,12 12,8" fill="#ffffff" stroke="#38bdf8" stroke-width="1.5"/>
              <polygon points="12,2 28,-10 24,6 12,6" fill="#e0f2fe"/>
            </g>`
        };

      case 'cape':
        return {
          behind: '',
          front: `
            <g transform="translate(${neckX}, ${neckY})" shape-rendering="crispEdges">
              <rect x="-9" y="-2" width="18" height="4" fill="#991b1b" stroke="#090d16" stroke-width="1"/>
              <rect x="-3" y="-2" width="6" height="4" fill="#fbbf24" stroke="#090d16" stroke-width="1"/>
              <polygon points="-9,2 -22,28 -12,30 -5,6" fill="#dc2626" stroke="#090d16" stroke-width="1"/>
              <polygon points="9,2 22,28 12,30 5,6" fill="#dc2626" stroke="#090d16" stroke-width="1"/>
            </g>`
        };

      case 'excalibur':
        return {
          behind: '',
          front: `
            <g transform="translate(${handX - 8}, ${handY - 22})" shape-rendering="crispEdges">
              <rect x="6" y="0" width="4" height="20" fill="#fef08a" stroke="#090d16" stroke-width="1"/>
              <rect x="7" y="1" width="2" height="18" fill="#38bdf8"/>
              <rect x="1" y="19" width="14" height="3" fill="#fbbf24" stroke="#090d16" stroke-width="1"/>
              <rect x="6" y="22" width="4" height="6" fill="#991b1b" stroke="#090d16" stroke-width="1"/>
            </g>`
        };

      default:
        return { behind: '', front: '' };
    }
  }

  window.generate16BitSpriteSVG = function (classId, stageNum, equippedAcc) {
    const cid = ['warrior', 'archer', 'mage', 'beast'].includes(classId) ? classId : 'warrior';
    const st = Math.max(1, Math.min(20, parseInt(stageNum, 10) || 1));
    const { tier, sub } = getTierAndSub(st);
    const imgPath = `./assets/characters/${cid}_t${tier}.png`;
    const anchors = getAnchors(cid, tier);
    const subFX = renderSubStagePixelFX(cid, tier, sub, anchors);
    const accSVG = renderEquippedAccessorySVG(equippedAcc, anchors);

    return `
      <svg viewBox="0 0 100 100" class="w-full h-full pixelated select-none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <rect x="0" y="0" width="100" height="100" fill="#0c1424" />
        ${accSVG.behind}
        <image href="${imgPath}" xlink:href="${imgPath}" x="2" y="2" width="96" height="96" preserveAspectRatio="xMidYMid meet" style="image-rendering: pixelated;" />
        ${subFX}
        ${accSVG.front}
      </svg>
    `;
  };

  // Preload all 28 Stitch 16-bit evolution sprites in the background for instant Vercel CDN switching
  function preloadAllCharacterSprites() {
    const classes = ['warrior', 'archer', 'mage', 'beast'];
    classes.forEach((cid) => {
      for (let t = 1; t <= 7; t++) {
        const img = new Image();
        img.decoding = 'async';
        img.src = `./assets/characters/${cid}_t${t}.png`;
      }
    });
  }

  if (typeof window !== 'undefined') {
    if (document.readyState === 'complete') {
      setTimeout(preloadAllCharacterSprites, 250);
    } else {
      window.addEventListener('load', () => setTimeout(preloadAllCharacterSprites, 250));
    }
  }
})();
