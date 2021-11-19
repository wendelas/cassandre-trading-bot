"use strict";(self.webpackChunkcassandre_trading_bot_website=self.webpackChunkcassandre_trading_bot_website||[]).push([[233],{3183:(t,e,a)=>{a.r(e),a.d(e,{data:()=>r});const r={key:"v-4170de30",path:"/learn/import-historical-data.html",title:"Import historical data",lang:"en-US",frontmatter:{lang:"en-US",title:"Import historical data",description:"Learn how to use import historical data when your trading bot start and use them in your strategy"},excerpt:"",headers:[{level:2,title:"Overview",slug:"overview",children:[]},{level:2,title:"Data file & format",slug:"data-file-format",children:[]},{level:2,title:"When to initialize data?",slug:"when-to-initialize-data",children:[]},{level:2,title:"Access your data in your strategy",slug:"access-your-data-in-your-strategy",children:[]}],filePathRelative:"learn/import-historical-data.md"}},5860:(t,e,a)=>{a.r(e),a.d(e,{default:()=>y});var r=a(6252);const o=(0,r.uE)('<h1 id="import-historical-data" tabindex="-1"><a class="header-anchor" href="#import-historical-data" aria-hidden="true">#</a> Import historical data</h1><h2 id="overview" tabindex="-1"><a class="header-anchor" href="#overview" aria-hidden="true">#</a> Overview</h2><p>This feature allows you to import historical data (tickers you selected) in Cassandre database, so you can initialise your strategy.</p><h2 id="data-file-format" tabindex="-1"><a class="header-anchor" href="#data-file-format" aria-hidden="true">#</a> Data file &amp; format</h2><p>At startup, Cassandre will search for all files starting with <code>tickers-to-import</code> and ending with <code>csv</code>.</p><p>This is how the file must be formatted:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>CURRENCY_PAIR,OPEN,LAST,BID,ASK,HIGH,LOW,VWAP,VOLUME,QUOTE_VOLUME,BID_SIZE,ASK_SIZE,TIMESTAMP\n&quot;BTC/USDT&quot;,&quot;0.00000001&quot;,&quot;0.00000002&quot;,&quot;0.00000003&quot;,&quot;0.00000004&quot;,&quot;0.00000005&quot;,&quot;0.00000006&quot;,&quot;0.00000007&quot;,&quot;0.00000008&quot;,&quot;0.00000009&quot;,&quot;0.00000010&quot;,&quot;0.00000011&quot;,1508546000\n&quot;BTC/USDT&quot;,&quot;1.00000001&quot;,&quot;1.00000002&quot;,&quot;1.00000003&quot;,&quot;1.00000004&quot;,&quot;1.00000005&quot;,&quot;1.00000006&quot;,&quot;1.00000007&quot;,&quot;1.00000008&quot;,&quot;1.00000009&quot;,&quot;1.00000010&quot;,&quot;1.00000011&quot;,1508446000\n&quot;ETH/USDT&quot;,&quot;2.00000001&quot;,&quot;2.00000002&quot;,&quot;2.00000003&quot;,&quot;2.00000004&quot;,&quot;2.00000005&quot;,&quot;2.00000006&quot;,&quot;2.00000007&quot;,&quot;2.00000008&quot;,&quot;2.00000009&quot;,&quot;2.00000010&quot;,&quot;2.00000011&quot;,1508346000\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="when-to-initialize-data" tabindex="-1"><a class="header-anchor" href="#when-to-initialize-data" aria-hidden="true">#</a> When to initialize data?</h2>',8),i=(0,r.Uk)("In you strategy, you should implement the "),s={href:"https://www.javadoc.io/doc/tech.cassandre.trading.bot/cassandre-trading-bot-spring-boot-autoconfigure/latest/tech/cassandre/trading/bot/strategy/GenericCassandreStrategy.html#initialize()",target:"_blank",rel:"noopener noreferrer"},n=(0,r.Uk)("initialize()"),u=(0,r.Uk)(" method. This method is executed by Cassandre before any other data (tickers, orders, trades...) is pushed to the strategy."),d=(0,r._)("h2",{id:"access-your-data-in-your-strategy",tabindex:"-1"},[(0,r._)("a",{class:"header-anchor",href:"#access-your-data-in-your-strategy","aria-hidden":"true"},"#"),(0,r.Uk)(" Access your data in your strategy")],-1),l=(0,r._)("p",null,"In your strategy, you can access the data with two methods:",-1),c={href:"https://www.javadoc.io/doc/tech.cassandre.trading.bot/cassandre-trading-bot-spring-boot-autoconfigure/latest/tech/cassandre/trading/bot/strategy/GenericCassandreStrategy.html#getImportedTickers()",target:"_blank",rel:"noopener noreferrer"},h=(0,r.Uk)("getImportedTickers()"),q=(0,r.Uk)("."),g={href:"https://www.javadoc.io/doc/tech.cassandre.trading.bot/cassandre-trading-bot-spring-boot-autoconfigure/latest/tech/cassandre/trading/bot/strategy/GenericCassandreStrategy.html#getImportedTickers(tech.cassandre.trading.bot.dto.util.CurrencyPairDTO)",target:"_blank",rel:"noopener noreferrer"},p=(0,r.Uk)("getImportedTickers(CurrencyPairDTO currencyPairDTO)"),m=(0,r.Uk)("."),b={},y=(0,a(3744).Z)(b,[["render",function(t,e){const a=(0,r.up)("OutboundLink");return(0,r.wg)(),(0,r.iD)(r.HY,null,[o,(0,r._)("p",null,[i,(0,r._)("a",s,[n,(0,r.Wm)(a)]),u]),d,l,(0,r._)("ul",null,[(0,r._)("li",null,[(0,r._)("a",c,[h,(0,r.Wm)(a)]),q]),(0,r._)("li",null,[(0,r._)("a",g,[p,(0,r.Wm)(a)]),m])])],64)}]])},3744:(t,e)=>{e.Z=(t,e)=>{const a=t.__vccOpts||t;for(const[t,r]of e)a[t]=r;return a}}}]);