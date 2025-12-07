
<template>
  <div class="game-navigator" :class="theme">
    <header>
      <div class="header-content-wrapper">
        <img src="/icons/anime_portal.png" alt="二游工具导航" class="site-icon-img" />
        <h1>二游工具导航</h1>
      </div>
      <div class="header-actions">
        <button
            @click="toggleTheme"
            class="theme-btn"
            :title="theme === 'latte' ? '切换到深色主题' : '切换到浅色主题'"
        >
          {{ theme === 'latte' ? '🌙' : '☀️' }}
        </button>

        <a
            href="https://github.com/DeeChael/anime-portal"
            target="_blank"
            class="theme-btn github-link"
            title="GitHub"
        >
          <img
              :src="getGithubIcon(theme)"
              alt="Github"
              class="github-icon"
          />
        </a>
      </div>
    </header>

    <main>
      <div class="companies-container">
        <p>*除米哈游、散爆以外其他所有公司的 slogan 我都没找到明确出处，为 DeepSeek 搜索结果，不保证真实性。</p>
        <img src="/slogan.png" alt="Slogan DeepSeek Response" width="auto" style="max-width: 777px" />
        <div
            v-for="company in companies"
            :key="company.id"
            class="company-card"
        >
          <div class="company-header">
            <img
                :src="getIconPath(company.enName)"
                :alt="company.name"
                class="company-icon"
                @error="handleImageError"
            />
            <div class="company-text-info">
              <a v-if="company.website"
                 :href="company.website"
                 target="_blank"
                 class="company-name-link"
                 :title="`前往 ${company.name} 官网`"
              >
                <h2>{{ company.name }}</h2>
              </a>
              <h2 v-else>{{ company.name }}</h2>
              <p v-if="company.slogan" class="company-slogan">
                {{ company.slogan }}
              </p>
            </div>
          </div>

          <div class="games-list">
            <div
                v-for="game in company.games"
                :key="game.id"
                class="game-item"
            >
              <div
                  class="game-header"
                  @click="toggleGame(game.id)"
              >
                <div class="game-header-left">
                  <img
                      :src="getIconPath(game.enName)"
                      :alt="game.name"
                      class="game-icon"
                      @error="handleImageError"
                  />
                  <div>
                    <h3>{{ game.name }}</h3>
                    <div class="tool-count">{{ getToolCount(game) }} 个工具</div>
                  </div>
                </div>
                <span class="toggle-icon">
                  {{ isGameExpanded(game.id) ? '−' : '+' }}
                </span>
              </div>

              <transition name="slide-fade">
                <div
                    v-show="isGameExpanded(game.id)"
                    class="tools-container"
                >
                  <div class="tools-grid">
                    <div v-if="game.tools.length === 0">
                      <p class="coming-soon">敬请期待</p>
                    </div>
                    <a
                        v-else
                        :href="tool.link"
                        target="_blank"
                        title="打开工具"
                        :key="tool.id"
                        v-for="tool in game.tools"
                        class="tool-card"
                    >
                      <div class="tool-icon-container">
                        <img
                            :src="getIconPath(tool.icon)"
                            :alt="tool.name"
                            class="tool-icon"
                            @error="handleImageError"
                        />
                      </div>
                      <div class="tool-info">
                        <h4>{{ tool.name }}</h4>
                        <p class="tool-description">{{ tool.description }}</p>
                        <div class="tool-tags">
                          <span
                              v-for="tag in tool.tags"
                              :key="tag"
                              class="tool-tag"
                          >
                            {{ tag }}
                          </span>
                        </div>
                      </div>
                    </a>
                    <!--                    <div
                                            v-else
                                            v-for="tool in game.tools"
                                            :key="tool.id"
                                            class="tool-card"
                                        >
                                          <div class="tool-icon-container">
                                            <img
                                                :src="getIconPath(tool.icon)"
                                                :alt="tool.name"
                                                class="tool-icon"
                                                @error="handleImageError"
                                            />
                                          </div>
                                          <div class="tool-info">
                                            <h4>{{ tool.name }}</h4>
                                            <p class="tool-description">{{ tool.description }}</p>
                                            <div class="tool-tags">
                                              <span
                                                  v-for="tag in tool.tags"
                                                  :key="tag"
                                                  class="tool-tag"
                                              >
                                                {{ tag }}
                                              </span>
                                            </div>
                                          </div>
                                          <a
                                              :href="tool.link"
                                              target="_blank"
                                              class="tool-link"
                                              title="打开工具"
                                          >
                                            ↗
                                          </a>
                                        </div>-->
                  </div>
                </div>
              </transition>
            </div>
          </div>
        </div>
      </div>
    </main>

    <footer class="site-footer">
      <p>免责声明：</p>
      <p>本网站为个人非盈利项目，所有游戏、商标和版权归各自公司所有。</p>
      <p>本网站所展示的所有游戏工具、资源链接、图标、描述等信息，均来源于互联网的公开收集和整合。本站仅提供信息分类和导航服务，不对外部链接内容的合法性、真实性、准确性或可用性承担任何形式的保证或责任。</p>
      <p>网站内提及的所有游戏名称、公司名称、标志（Logo）、商标、游戏角色、原创图片及相关知识产权，均归属于其各自的版权所有者（包括但不限于：鹰角网络、米哈游、库洛游戏及其关联公司）。</p>
      <p>本网站的运营者与上述任何游戏公司或实体均无任何商业合作或从属关系，本站不代表任何官方立场。</p>
      <p>用户在点击本站提供的任何外部链接时，请自行判断并承担所有风险。如遇任何法律问题或侵权行为，请直接联系相关工具的开发者或版权方。</p>
      <br>
      <p>本站使用 <a href="https://vuejs.org" target="_blank">Vue</a> 进行开发</p>
      <p>本站使用 <a href="https://github.com/catppuccin/catppuccin" target="_blank">Catppuccin</a> 配色方案</p>
      <p>感谢 <a href="https://gemini.google.com" target="_blank">Gemini</a> 为本站绘制了图标</p>
    </footer>
  </div>
</template>

<script>
import miHoYo from "@/companies/miHoYo.vue";
import Hypergryph from "@/companies/Hypergryph.vue";
import KuroGames from "@/companies/KuroGames.vue";
import BluePoch from "@/companies/BluePoch.vue";
import SunBornGame from "@/companies/SunBornGame.vue";
import Others from "@/companies/Others.vue";

export default {
  name: 'GameNavigator',
  data() {
    return {
      theme: 'latte',
      expandedGames: new Set(),
      companies: [
        Hypergryph,
        miHoYo,
        KuroGames,
        BluePoch,
        SunBornGame,
        Others
      ]
    }
  },
  mounted() {
    this.companies.forEach(company => {
      company.games.forEach(game => {
        this.expandedGames.add(game.id);
      });
    });

    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      this.theme = 'mocha';
    }
  },
  methods: {
    toggleTheme() {
      this.theme = this.theme === 'latte' ? 'mocha' : 'latte';
    },
    toggleGame(gameId) {
      if (this.expandedGames.has(gameId)) {
        this.expandedGames.delete(gameId);
      } else {
        this.expandedGames.add(gameId);
      }
    },
    isGameExpanded(gameId) {
      return this.expandedGames.has(gameId);
    },
    getToolCount(game) {
      return game.tools.length;
    },
    getIconPath(name) {
      return `/icons/${name}.png`;
    },
    getGithubIcon(theme) {
      if (theme === 'latte') {
        return `/icons/github-mark.png`
      } else {
        return `/icons/github-mark-white.png`
      }
    },
    handleImageError(event) {
      event.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHJ4PSI4IiBmaWxsPSIjQ0RDRENEIi8+PHRleHQgeD0iMzAiIHk9IjM1IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTIiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiM2NjYiPklDT048L3RleHQ+PC9zdmc+';
    }
  }
}
</script>

<style scoped>
.game-navigator.latte {
  --rosewater: #dc8a78;
  --flamingo: #dd7878;
  --pink: #ea76cb;
  --mauve: #8839ef;
  --red: #d20f39;
  --maroon: #e64553;
  --peach: #fe640b;
  --yellow: #df8e1d;
  --green: #40a02b;
  --teal: #179299;
  --sky: #04a5e5;
  --sapphire: #209fb5;
  --blue: #1e66f5;
  --lavender: #7287fd;

  --text: #4c4f69;
  --subtext1: #5c5f77;
  --subtext0: #6c6f85;

  --overlay2: #7c7f93;
  --overlay1: #8c8fa1;
  --overlay0: #9ca0b0;

  --surface2: #acb0be;
  --surface1: #bcc0cc;
  --surface0: #ccd0da;

  --base: #eff1f5;
  --mantle: #e6e9ef;
  --crust: #dce0e8;
}

.game-navigator.mocha {
  --rosewater: #f5e0dc;
  --flamingo: #f2cdcd;
  --pink: #f5c2e7;
  --mauve: #cba6f7;
  --red: #f38ba8;
  --maroon: #eba0ac;
  --peach: #fab387;
  --yellow: #f9e2af;
  --green: #a6e3a1;
  --teal: #94e2d5;
  --sky: #89dceb;
  --sapphire: #74c7ec;
  --blue: #89b4fa;
  --lavender: #b4befe;

  --text: #cdd6f4;
  --subtext1: #bac2de;
  --subtext0: #a6adc8;

  --overlay2: #9399b2;
  --overlay1: #7f849c;
  --overlay0: #6c7086;

  --surface2: #585b70;
  --surface1: #45475a;
  --surface0: #313244;

  --base: #1e1e2e;
  --mantle: #181825;
  --crust: #11111b;
}

.game-navigator {
  min-height: 100vh;
  padding: 20px;
  background-color: var(--base);
  color: var(--text);
  font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
  transition: background-color 0.3s, color 0.3s;
}

header {
  margin-bottom: 40px;
  position: relative;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

h1 {
  font-size: 2rem;
  margin-bottom: 8px;
  color: var(--lavender);

  display: flex;
  align-items: center;
  gap: 15px;
  justify-content: flex-start;
}

.site-icon-img {
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 64px;
  object-fit: contain;
  flex-shrink: 0;
}

@media (max-width: 768px) {
  h1 {
    font-size: 1.8rem;
    gap: 10px;
  }

  .site-icon-img {
    width: 35px;
    height: 35px;
  }
}

.header-content-wrapper {
  display: flex;
}

.header-actions {
  display: flex;
  gap: 10px;
  margin-top: 10px;
  flex-shrink: 0;
}

.github-link {
  text-decoration: none;
  color: var(--text);

  font-size: 1.2rem;
}

.site-footer {
  text-align: center;
  padding: 30px 20px 20px;
  color: var(--subtext1);
  font-size: 0.9rem;
  border-top: 1px solid var(--surface0);
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;
}

.disclaimer-details {
  margin-top: 8px;
  font-size: 0.8rem;
  color: var(--subtext0);
}

.subtitle {
  font-size: 1.1rem;
  color: var(--subtext1);
  margin-bottom: 20px;
}

.theme-toggle {
  position: absolute;
  top: 0;
  right: 0;
  flex-direction: row;
}

.theme-btn {
  background: var(--surface0);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 1.2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s, transform 0.2s;
}

.theme-btn:hover {
  background: var(--surface1);
  transform: scale(1.1);
}

.companies-container {
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  max-width: none;
  padding: 0 20px;
  margin: 0 auto;
}

.company-card {
  background: var(--mantle);
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

.company-header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 2px solid var(--surface0);
}

.company-text-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2px;
}

.company-header h2 {
  font-size: 1.6rem;
  color: var(--blue);
  margin: 0;
}

.company-slogan {
  font-size: 1rem;
  color: var(--subtext0);
  margin: 0;
  font-style: italic;
}

@media (max-width: 768px) {
  .company-slogan {
    font-size: 0.9rem;
  }
}

.company-icon {
  width: 60px;
  height: 60px;
  border-radius: 12px;
  object-fit: cover;
  background: var(--surface0);
}

.github-icon {
  width: 24px;
  height: 24px;
  object-fit: cover;
  background: var(--surface0);
}

.company-header h2 {
  font-size: 1.8rem;
  color: var(--blue);
  margin: 0;
}

.games-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.game-item {
  background: var(--surface0);
  border-radius: 12px;
  overflow: hidden;
}

.game-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.game-header:hover {
  background: var(--surface1);
}

.game-header-left {
  display: flex;
  align-items: center;
  gap: 16px;
}

.game-icon {
  width: 50px;
  height: 50px;
  border-radius: 10px;
  object-fit: cover;
  background: var(--surface2);
}

.game-header h3 {
  font-size: 1.3rem;
  margin: 0 0 4px 0;
  color: var(--text);
}

.tool-count {
  font-size: 0.85rem;
  color: var(--subtext0);
}

.toggle-icon {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--blue);
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.tools-container {
  padding: 20px;
  background: var(--crust);
  border-top: 1px solid var(--surface1);
}

.tools-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
  margin-bottom: 20px;
}

.tool-card {
  background: var(--surface0);
  border-radius: 12px;
  padding: 20px;
  display: flex;
  align-items: flex-start;
  gap: 16px;
  position: relative;
  transition: transform 0.2s, box-shadow 0.2s;
  border: 1px solid transparent;
}

.tool-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  border-color: var(--blue);
}

.tool-icon-container {
  flex-shrink: 0;
}

.tool-icon {
  width: 50px;
  height: 50px;
  border-radius: 10px;
  object-fit: cover;
  background: var(--surface1);
}

.tool-info {
  flex-grow: 1;
  min-width: 0;
}

.tool-info h4 {
  margin: 0 0 8px 0;
  color: var(--text);
  font-size: 1.1rem;
}

.tool-description {
  margin: 0 0 12px 0;
  color: var(--subtext1);
  font-size: 0.9rem;
  line-height: 1.4;
}

.tool-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.tool-tag {
  background: var(--surface1);
  color: var(--subtext0);
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 0.8rem;
}

.tool-link {
  position: absolute;
  top: 20px;
  right: 20px;
  color: var(--blue);
  text-decoration: none;
  font-size: 1.2rem;
  opacity: 0.7;
  transition: opacity 0.2s;
}

.tool-link:hover {
  opacity: 1;
}

.add-tool-hint {
  text-align: center;
  padding: 16px;
  background: var(--surface1);
  border-radius: 10px;
  margin-top: 10px;
  color: var(--subtext0);
  font-size: 0.9rem;
}

.add-tools-section {
  max-width: 1400px;
  margin: 50px auto 30px;
  background: var(--mantle);
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

.add-tools-section h3 {
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: var(--green);
  display: flex;
  align-items: center;
  gap: 10px;
}

.coming-soon {
  font-size: 1.2rem;
}

.instructions {
  background: var(--surface0);
  border-radius: 12px;
  padding: 20px;
}

.instructions p {
  margin-bottom: 16px;
  line-height: 1.5;
  color: var(--text);
}

.code-example {
  background: var(--crust);
  border-radius: 8px;
  padding: 16px;
  margin: 16px 0;
  overflow-x: auto;
  font-family: 'Courier New', monospace;
  font-size: 0.9rem;
  line-height: 1.4;
  color: var(--green);
  border-left: 4px solid var(--green);
}

.note {
  font-size: 0.9rem;
  color: var(--subtext0);
  font-style: italic;
  padding: 10px;
  background: var(--surface1);
  border-radius: 8px;
}

footer {
  text-align: center;
  padding: 30px 0 20px;
  color: var(--subtext1);
  font-size: 0.9rem;
  border-top: 1px solid var(--surface0);
  margin-top: 30px;
}

@media (max-width: 768px) {
  .game-navigator {
    padding: 15px;
  }

  h1 {
    font-size: 2rem;
  }

  .company-card {
    padding: 18px;
  }

  .company-header {
    flex-direction: column;
    text-align: center;
    gap: 12px;
  }

  .tools-grid {
    grid-template-columns: 1fr;
  }
}

@media (min-width: 769px) and (max-width: 1200px) {
  .tools-grid {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }
}

@media (min-width: 1201px) {
  .tools-grid {
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  }
}
</style>
