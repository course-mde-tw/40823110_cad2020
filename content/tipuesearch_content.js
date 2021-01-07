var tipuesearch = {"pages": [{'title': 'About', 'text': '此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules  https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'About.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數. \n', 'tags': '', 'url': 'Develop.html'}, {'title': '每周進度', 'text': '\n', 'tags': '', 'url': '每周進度.html'}, {'title': 'W1', 'text': '指令 \n git config --global http.proxy http://{2001:288:6004:17::69}:3128 (中華電信的 proxy)\n\ngit config --global user.email "使用者的email"\n\ngit config --global user.name "40823111(使用者名稱)"\n\ngit clone https://github.com/40823111/cad2020.git (把github上的資料複製到cad2020  的資料夾)\n\ngit submodule add  https://github.com/mdecourse/cmsimde.git cmsimde \n\ngit clone --recurse submodules https://github.com/40823111/cad2020.git\n\n \n \n \n \n', 'tags': '', 'url': 'W1.html'}, {'title': '教學影片', 'text': '', 'tags': '', 'url': '教學影片.html'}, {'title': 'W5', 'text': '建立ssh遇到問題 \n 指令打錯 \n 正確指令為 \n ssh-keygen -t rsa -b 4096 -C "使用者學號" \n \n', 'tags': '', 'url': 'W5.html'}, {'title': 'w6', 'text': '當你上Google搜尋 API，你會看到它解釋為 \xa0 應用程式介面 ，也就是 Application Programming Interface \xa0 的縮寫，扮演應用程式和應用程式之間的橋樑。 \n API 就像一個介面，可以幫助開發者節省精力，並很快的達到目的。舉個例子，假日出去玩總是玩到很累，口乾舌燥，讓人很想去飲料販賣機投瓶奶茶來解渴。好，現在你面前有一台飲料販賣機，接下來你會這麼做： \n \n 你想喝一瓶奶茶 \n 你按了飲料機上的奶茶按鈕 \n 你從取物口拿出奶茶 \n \n 這其中就蘊含了 API 的概念，我們更進一步思考，剛剛例子中的奶茶就是「你想取得的資料」。而飲料機上的按鈕就是 API ，按下去飲料機就收到了你的需求，並將奶茶從取物口送出，你也就得到了你想要的資料了。 \n 用上面飲料機例子的觀點來思考另外一個範例：「店面與倉庫」；通常，一間商店店面的「商品擺設、配置」，和後面倉庫的擺設配置會是不一樣的，今天如果有一個負責把貨物從倉庫擺放到店面的員工，他必須要知道擺放的規則，可能是要配合商店的行銷企劃，可能是要擺的整整齊齊、一目了然。 \n 在這個「店面與倉庫」的例子裡， 商品 就可以想成是 數據 ，而 倉庫 就好比是 資料庫 ， 店面 則好比是我們平常使用的 網頁 或是 APP ，而負責把商品從倉庫擺放到店面的員工就扮演著 API 的角色，依照著某種規則、協定(行銷企劃、商品的擺放規則)在運作著，而我們不必知道他是怎麼運作的。 \n 如果一直從字面上的 介面 去思考，AP「I」 ( Interface ) ，其實有點難搞懂它的概念。簡單來說，它就像是可以讓你用的一個函式庫。呼叫你想要使用的函式，並給予相對應的參數，函式便回傳給你結果，流程大概是像這樣。 ( 函式 的概念，會在之後的 Python筆記中介紹到！) \n 基本上，不管做什麼事情、寫什麼樣的程式都會用到 API 這個概念，除非你從頭開始編寫每一行程式碼，否則你一定會和外面的一些組件進行互動，而幫助你能夠和這些組件互動的接口就是 API。 \n 即使你完全是從頭開始寫你的程式，一個漂亮的應用程式也會有供內部使用的 API 來幫助組織你的程式碼，除了方便維護程式碼，也能讓特定的功能重複使用性提高，增加效率。最重要的是， 使用 API 的過程時，你不需要知道其內部程式運作的邏輯或演算法，你只要告訴 API 它需要知道的事，它就會把你想知道的結果帶來給你。 \n \n', 'tags': '', 'url': 'w6.html'}, {'title': 'W7', 'text': 'Engineering(工程師) \n Engineers, as practitioners of engineering, are professionals who invent, design, analyze, build and test machines, complex systems, structures, gadgets and materials to fulfill functional objectives and requirements while considering the limitations imposed by practicality, regulation, safety and cost. \n 工程師，作為工程從業者，是專業人員，他們在研究實用性，法規，安全性和成本的限制的同時，發明，設計，分析，建造和測試機器，複雜的系統，結構，小工具和材料，以實現功能目標和要求。 \n The word engineer (Latin ingeniator) is derived from the Latin words ingeniare ("to create, generate, contrive, devise") and ingenium ("cleverness"). The foundational qualifications of an engineer typically include a four-year bachelor\'s degree in an engineering discipline, or in some jurisdictions, a master\'s degree in an engineering discipline plus four to six years of peer-reviewed professional practice (culminating in a project report or thesis) and passage of engineering board examinations. \n 工程師（Latin engeniator）一詞源自拉丁語ingeniare（“創造，生成，嘗試，設計”）和ingenium（“聰明”）。 工程師的基本資格通常包括工程學科的四年制學士學位，或在某些轄區，工程學科的碩士學位以及四到六年的同行評審專業實踐（最終形成項目報告或論文） ）並通過工程委員會考試。 \n The work of engineers forms the link between scientific discoveries and their subsequent applications to human and business needs and quality of life. \n 工程師的工作構成了科學發現及其對人類和商業需求以及生活質量的後續應用之間的聯繫。 The following paragraph cited from "An Introduction to Mechanical Engineering, Third Edition Jonathan Wickert and Kemper E. Lewis", pp. \n 4-5, 2013 以下段落引自“機械工程入門，第三版Jonathan Wickert和Kemper E. Lewis”，第4-5頁，2013年 The word "engineering" derives from the Latin root ingeniere, meaning to design or to devise, which also forms the basis of the word "ingenious." \n “工程”一詞源自拉丁語詞根創新，意為設計或設計，這也構成了“精髓”一詞的基礎。 Those meanings are quite appropriate summaries of the traits of a good engineer. \n 這些含義是對優秀工程師特質的恰當概括。 \n At the most fundamental level, engineers apply their knowledge of mathematics, science, and materials—as well as their skills in communications and business—to develop new and better technologies. \n 在最基本的層面上，工程師運用其在數學，科學和材料方面的知識以及他們在通信和商務方面的技能，來開發新的更好的技術。 \n Rather than experiment solely through trial and error, engineers are educated to use mathematics, scientific principles, and computer simulations as tools to create faster, more accurate, and more economical designs. \n 不僅要通過反複試驗來進行實驗，還應教育工程師使用數學，科學原理和計算機模擬作為工具來創建更快，更準確和更經濟的設計。 \n In that sense, the work of an engineer differs from that of a scientist, who would normally emphasize the discovery of physical laws rather than apply those phenomena to develop new products. Engineering is essentially a bridge between scientific discovery and product applications. \n 從這個意義上講，工程師的工作與科學家的工作不同，科學家通常會強調發現物理定律，而不是將這些現象應用於開發新產品。 工程本質上是科學發現與產品應用之間的橋樑。 \n Engineering does not exist for the sake of furthering or applying mathematics, science, and computation by themselves. Rather, engineering is a driver of social and economic growth and an integral part of the business cycle. With that perspective, the U.S. Department of Labor summarizes the engineering profession as follows: \n 工程本身並不是為了進一步發展或應用數學，科學和計算而設計的。 而是，工程技術是社會和經濟增長的驅動力，也是商業周期的組成部分。 從這一角度出發，美國勞工部將工程專業總結如下： \n Engineers apply the theories and principles of science and mathematics to research and develop economical solutions to technical problems. Their work is the link between perceived social needs and commercial applications. \n 工程師運用科學和數學的理論和原理來研究和開發技術問題的經濟解決方案。 他們的工作是感知的社會需求與商業應用之間的聯繫。 \n Engineers design products, machinery to build those products, plants in which those products are made, and the systems that ensure the quality of the products and the efficiency of the workforce and manufacturing process. \n 工程師設計產品，製造這些產品的機械，製造這些產品的工廠以及確保產品質量以及勞動力和製造過程效率的系統。 Engineers design, plan, and supervise the construction of buildings, highways, and transit systems. They develop and implement improved ways to extract, process, and use raw materials, such as petroleum and natural gas. They develop new materials that both improve the performance of products and take advantage of advances in technology. \n 工程師設計，規劃和監督建築物，公路和運輸系統的建設。 他們開發並實施了改進的方法來提取，加工和使用石油和天然氣等原材料。 他們開發新的材料，既可以改善產品的性能，又可以利用技術的進步。 \n They harness the power of the sun, the Earth, atoms, and electricity for use in supplying the Nation’s power needs, and create millions of products using power. They analyze the impact of the products they develop or the systems they design on the environment and on people using them. Engineering knowledge is applied to improving many things, including the quality of healthcare, the safety of food products, and the operation of financial systems. \n 他們利用太陽，地球，原子和電力的力量來滿足國家的電力需求，並利用電力創造數百萬種產品。 他們分析開發的產品或設計的系統對環境和使用它們的人的影響。 工程知識可用於改善許多方面，包括醫療保健質量，食品安全性和金融系統的運作。 \n', 'tags': '', 'url': 'W7.html'}, {'title': 'W8', 'text': '下載 Pyslvs_UI   Pyslvs 使用手冊 \n (1) 平面機構設計分析 \n \n \n \n', 'tags': '', 'url': 'W8.html'}, {'title': 'W9', 'text': '下載 coppeliasim , 如果跑不出來須從隨身系統裡的Python38資料夾下複製一份vcruntime140_1才能使coppeliasim正常使用 \n 具有集成開發環境的機器人模擬器CoppeliaSim基於分佈式控制體系結構：每個對象/模型都可以通過嵌入式腳本，插件，ROS或BlueZero節點，遠程API客戶端或自定義解決方案進行單獨控制。 這使CoppeliaSim非常通用，非常適合多機器人應用。 控制器可以用C / C ++，Python，Java，Lua，Matlab或Octave編寫 \n \n 設法讓機器看得見, 能夠藉以判讀環境內容, 從容運作 \n 讓原本繁雜的流程自動化, 提升操作者的生活品質 \n \n 1.設計出自己的機構 我們想設計出一套自動化的設備 把物品從A運送到B(圖片僅供參考 ) \n \n', 'tags': '', 'url': 'W9.html'}, {'title': 'W11', 'text': '1.當分組開始啟動電腦輔助設計專案後, 可將分組網站的動態網站在 cadlab Group Leader 的電腦上,組 員可以在不同時間的情況下分別推送資料 \n 2.繼續研究CoppeliaSim 個小組各自完成自己的任務 \n \n \n', 'tags': '', 'url': 'W11.html'}, {'title': '拯救英文', 'text': "\n 曾經錯過沒有關係, 但若因為終身菜英文而錯失美好未來, 著實可惜. 解救菜英文就從現在開始. \n 先從 最常用的 2000 個英文字彙 開始. \n 國中英語字彙 \xa0 2000 字 \n 普通高中 4500 -7000 字 \n 技職與綜合高中 4000 - \xa0 5500 字 \n 自行寫程式兼學英文字彙: \n 假如能夠配合\xa0 https://github.com/mdecourse/lookupdict \xa0 從 Webster 英英字典中整理出 \xa0 5500 字 \xa0 的英文說明, 並逐字研讀, 應該是解救菜英文最佳手段. \n 使用電腦學習英文字彙: \n 另一項學習英文字彙的方式則是利用電腦或筆電下載安裝 \xa0 Anki , 然後導入 \xa0 4000 英文單字 學習模組, 就可以開始學習了. Anki 還有其他 學習英文的 Decks . \n 使用手機學習英文字彙: \n 在手機上安裝 查查單字 \xa0 Apps (Android \xa0 查查英文 ). \n 在手機上安裝 \xa0 Anki英辞 \xa0 Apps, 這是以 \xa0 https://github.com/skywind3000/ECDICT \xa0 英漢字典內容為基礎的 Anki 學習套件, 使用者可以將所查詢的英文單字解釋內容設為 Anki 字詞, 進一步作為暗記英文字彙的有效工具. \n 常用的 2000 + 800 個英文字彙 \n A- a/an, a few, a little, a lot, a.m., able, about, above, abroad, across, act, action, actor, actress, actually, afraid, after, afternoon, again, age, ago, agree, ahead, air, airplane(plane), airport, all, allow, almost, along, already, also, always, America, American,and, angle, angry, animal, another, answer, ant, any, anyone(anybody), anything, apartment, appear, apple, April, area, arm, around, arrive, art, as, ask, at, attack, August, aunt, autumn(fall), away B- baby, back, bad, badminton, bag, bake, bakery, balcony, banana, band, bank, baseball, basket, basketball, bat, bath, bathroom, be(am, is, are, was, were, been), beach, bean, bear, beautiful, because, become, bed, bedroom, bee, beef, before, begin, behind, believe, bell, belong, below, belt, bench, beside, between, bicycle(bike), big, bird, birthday, bite, black, blackboard, blank, blanket, blind, block, blow, blue, boat, body, boil, book, bookstore, bored, boring, born, borrow, boss, both, bottle, bottom, bow, bowl, box, boy, brave, bread, break, breakfast, bridge, bright, bring, brother, brown, brush, bug, build, bun, burn, bus, business, businessman, busy, but, butter, butterfly,button, buy, by C- cake, call, camera, camp, can, could, candle, candy, cap, car, card, care, careful, carry, case, castle, cat, catch, celebrate, cellphone, cent, center, centimeter, chair, chalk, chance, change, cheap, cheat, check, cheer, cheese, chicken,\xa0 child, China,\xa0 Chinese, chocolate, choice, choose,\xa0 chopsticks, Christmas, church, circle, city, clap, class, classmate, classroom,clean, clear, clerk, climb, clock, close, clothes, cloud, cloudy, club, coat, coffee, cold,\xa0 collect,\xa0 color,\xa0 comb,\xa0 come,\xa0 comfortable,\xa0 comic,\xa0 common,\xa0 computer, convenient, cook, cookie, cool, copy, corner, correct, cost, couch, count, country, course, cousin, cover, cow, crazy, cross, cry, cup, cut, cute \xa0\xa0 \xa0 D- dance,dangerous,dark,date,daughter,day,dead,deal,dear,death,December,decide,deep,define,delicious,dentist,department store,desk,dictionary,die,different,difficult,dig,dining room,dinner,dirty,dish,do (does, did, done),doctor(Dr.),dog,doll,dollar,door,dot,down,download,dozen,draw,drawer,dream,dress,drink,drive,driver,drop,drum,dry,duck,during \xa0\xa0 \xa0 E- each,ear,early,earth,earthquake,east,Easter, easy,eat,egg,eight,eighteen,eighty,either,elementary school,elephant,eleven,else,e-mail,end,engineer,English, enjoy,enough,enter,envelope,eraser,error,eve,even,evening,ever,every,everyone(everybody),everything,example,excellent,except,excited,exciting,excuse,exercise,expect,expensive,experience,explain,eye \xa0\xa0 \xa0 F- face,fact,factory,fail,fall,family,famous,fan,far,farm,farmer,fast,fat,father(dad, daddy),favorite,February,feed,feel,festival,fever,few, 55fifteen,fifty,fight,file,fill,finally,find,fine,finger,finish,fire,first,fish,fisherman,five,fix,floor,flower,fly,follow,food,fool,foot,for,foreign,foreigner,forget,fork,forty,four,fourteen,fox,free,fresh,Friday,friend,friendly,fries(French fries),frog,from,front,fruit,fry,full,fun,funny,future \xa0\xa0 \xa0 G- game, garden, garbage, gas, gate, get, ghost, giant, gift, girl, give, glad, glass, glasses, glove, glue, go, goat, god, good, good-bye(goodbye, bye), goose, grade, gram, grandfather(grandpa), grandmother(grandma), grape, grass, gray, great, green, ground, group, grow, guava, guess, guitar, guy, gym H- habit, hair, half, Halloween, ham, hamburger (burger), hand, handsome, hang, happen, happy, hard, hard-working, hat, hate, have (has, had), he (him, his, himself), head, headache, health, healthy, hear, heart, heat, heavy, height, hello, help, helpful, hen, here, hey, hi, hide, high, hike, hill, history, hit, hobby, hold, holiday, home, homework, honest, honey, hope, horse, hospital, hot, hot dog, hotel, hour, house, housewife, how, however, hundred, hungry, hunt, hurry, hurt, husband I- I(me, my, mine, myself), ice, ice cream, idea, if, important, in, inch, insect, inside, interest, interested, interesting, Internet (Net), interview, into, invite, island, it(its, itself), item \xa0\xa0 \xa0 J- jacket, January, jeans, job, jog, join, joke, joy, juice, July, jump, June, junior high school, just K- keep, key, kick, kid, kill, kilogram, kind, king, kiss, kitchen, kite, knee, knife, knock, know, knowledge L- lake, lamp, land, language, large, last, late, later, laugh, lawyer, lazy, lead, leader, learn, least, leave, left, leg, lemon, lend, less, lesson, let, letter, level, library, lie, life, light, like, line, lion, lip, list, listen, little,live, living room, lonely, long, look, lose, loud, love, lovely, low, lucky, lunch M- machine, mad, magic, mail, mailman(mail carrier), main, make, man, many, map, March, mark, marker, market, married, mask, math(mathematics), matter, may (might), May,maybe, meal, mean, meat, medicine, medium, meet, meeting, member, menu, metro, middle, mile, milk, million, mind, minute, Miss, miss, mistake, modern, moment, Monday, money, monkey, month, moon, more, morning, mop, most, mother (mom, mommy), motorcycle, mountain, mouse, mouth, move, movie, Mr., Mrs., Ms., much, mud, museum, music, must N- nail, name, national, nature, near, neck, need, neighbor, never, new, news, newspaper, next, nice, night, nine, nineteen, ninety, no, nobody, noise, noisy, noodle, noon,north, nose, not, note, notebook, nothing, notice, November, now, number, nurse O- o'clock, October, of, off, office, officer, often, oil, OK, old, on, once, one, only, open, or,\xa0 orange, order, other, out, outside, over, own P- p.m., pack, package, page, paint, pair, pants, papaya, paper, parent, park, part, 56party, pass, past, paste, pay, PE(physical education), peach, pear, pen, pencil, people, perhaps, person, pet, photo, piano, pick, picnic, picture, pie, piece, pig, pin, pink, pipe, pizza, place, plan, planet, plant, plate, play, player, playground, please, pleasure, pocket, point, police, polite, pond, pool, poor, pop, popcorn, popular, pork, possible, post office, postcard, pot, pound, power, probably, practice, pray, prepare, present, pretty, price, prize, problem, program, proud, public, pull, pumpkin, puppy, purple, push, put \xa0\xa0 \xa0 Q- quarter, queen, question, quick, quiet, quite, quiz R- rabbit, race, radio, rain, rainbow, rainy, raise, rat, reach, read, ready, real, really, reason, red, refrigerator (fridge), relative, remember, repeat, report, reporter, rest, restaurant, restroom, rice, rich, ride, right, ring, rise, river, road, robot, R.O.C./ROC,rock, roll, room, root, rope, rose, round, row, rule, ruler, run S- sad, safe, sail, salad, sale, salesman, salt, same, sandwich, Saturday, save, say, scared, school, science, scooter, screen, sea, season, seat, second, secretary, see, seed, seesaw, seldom, sell, send, senior high school, sentence, September, serious, service, set, seven, seventeen, seventy, several, shake, shape, share, sharp, she (her, hers, herself), sheep, shine, ship, shirt, shoe(s), shop, shopkeeper, short, shorts, should, shoulder, shout, show, shower, shy, sick, side, sidewalk, sight, sign, simple, since, sing, singer, sir, sister, sit, six, sixteen, sixty, size, skirt, sky, sleep, slide, slim, slow, small, smart, smell, smile, smoke, snack, snake, snow, snowy, so, soccer, socks, sofa, soldier, some, someone(somebody), something, sometimes, somewhere, son, song, soon, sore, sorry, sound, soup, south, space, speak, special, spell, spend, spider, spoon, sports, spring, square, stairs, stamp, stand, star, start, station, stay, steak, still, stomach, stop, store, story, straight, strange, stranger, strawberry, street, string, strong,student, study, stupid, subject, successful, sugar, summer, sun, Sunday, sunny, supermarket, sure, surf, surprise, surprised, sweater, sweet, swim, swing T- table, tail, Taiwan, take, talk, tall, tape, taste, taxi, tea, teach, teacher, team, teenager, telephone(phone), television(TV), tell, temple, ten, tennis, terrible, test, than, thank, that, the, theater, then, there, these, they(them, their, theirs, themselves), thick, thin, thing, think, third, thirsty, thirteen, thirty, this, those, though(although), thousand, three, throat, through, throw, Thursday, ticket, tidy, tie, tiger, time, tip, tired, to, toast, today, toe, together, tomato, tomorrow, tonight, too, tool, tooth, top, topic, total, touch, towel, town, toy, traffic, train, trash, treat, tree, trick, trip, trouble, truck, true, try, T-shirt, Tuesday, turn, turtle, twelve, twenty, twice, two, type, typhoon U- ugly, umbrella, uncle, under, understand, unhappy, uniform, until, up, upload, U.S.A./USA, use, useful, usually V- vacation, vegetable, very, video, violin, visit, visitor, voice W- wait, waiter, waitress, wake, walk, wall, wallet, want, warm, wash, watch, water, watermelon, wave, way, we (us, our, ours, ourselves), weak, wear, weather, Wednesday, week, weekend, welcome, well, west, wet, what, when, where, whether, which, while, white, who, whose, why, wide, wife, will(would), win, wind, window, windy, winter, wise, wish, with, without, woman, wonderful, word, work, workbook, worker, world, worry, write, writer, wrong \xa0\xa0 \xa0 X- Y- yard, year, yellow, yes(yeah), yesterday, yet, you(your, yours, yourself, yourselves), young, yummy Z- zebra, zero, zoo 其他常用800字（依字母排列） A- absent,\xa0 accept,\xa0 accident,\xa0 active,\xa0 activity,\xa0 add,\xa0 address,\xa0 admire,\xa0 adult, advertisement, advice, advise, affect, against, aim, air conditioner, airlines, alarm, album, alike, alive, alone, aloud, alphabet, altogether, ambulance, among, amount, ancient,angel,anger, ankle, anywhere, apologize, appreciate, argue, armchair, army, arrange, artist, asleep, assistant, assume, attention, available, avoid B- baby sitter, backpack, backward, ball, balloon,barbecue,barber, bark, base, basement, basic, bathe, beard, beat, beauty, beer, beginner, beginning, behave, besides, beyond, bill, biology, bitter, blame, bless, blood, blouse, board, bomb, bone, bookcase, bother, bowling, branch, brick, broad, broadcast, brunch, bucket, buffet, building, bundle, burger, burst C- cabbage,\xa0 cable,\xa0 cafeteria, cage,\xa0 calendar,\xa0 calm,\xa0 campus,\xa0 cancel,\xa0 cancer, captain, careless, carpet, carrot, cartoon, cash, cause, ceiling, central, century, cereal, certain, channel, character, charge, chart, chase, chemistry, chess,\xa0 childhood,\xa0 childish,\xa0 childlike,\xa0 chin,\xa0 chubby,\xa0 classical,\xa0 clever, climate,\xa0 closet,\xa0 coach,\xa0 coast,\xa0 cockroach,\xa0 coin, cola,\xa0 college,\xa0 colorful, command, comment,company, compare, complain, complete, concern,confident,confuse,\xa0 congratulation,\xa0 consider,\xa0 considerate,\xa0 contact\xa0 lens,\xa0 continue, contract,\xa0 control,\xa0 convenience\xa0 store,\xa0 conversation,\xa0 corn,\xa0 cotton,\xa0 cough, couple, courage, court, cowboy,crab, crayon, cream, create, credit card, crime, crowd, crowded, cruel, culture, cure, curious, current, curtain, curve, custom, customer D- daily, damage, danger, dawn, deaf, debate, decision, decorate, decrease, deer, degree, deliver, department, depend, describe, desert, design, desire, dessert, detect, develop, dial, diamond, diary, diet, difference, difficulty, diligent, diplomat,\xa0 dinosaur,\xa0 direct,\xa0 direction,\xa0 disappear,\xa0 discover,\xa0 discuss, discussion, dishonest, distance, distant, divide, dizzy, dodgeball, dolphin, donkey, double, doubt, doughnut, downstairs, downtown, dragon, drama, dresser, drugstore, dryer, dumb, dumpling, duty E- eagle, earn, earrings, ease, edge, education, effort, elder, elect, electric, embarrass, emotion, emphasize, employ, empty, enemy, energetic, energy, engine, 58entrance, environment, envy, equal, especially, event, everywhere, evil, exam, excite, exist, exit, express, extra F- fair,false, fancy, fantastic, fashionable, faucet, fault, fear, fee, feeling, female, fence, film, final, fit, flag, flashlight, flat tire, flight, flour, flu, flute, focus, fog, foggy, foolish, football, forest, forgive, form, formal, former,\xa0 forward,\xa0 frank,\xa0 freedom,\xa0 freezer,\xa0 freezing,\xa0 friendship,\xa0 frighten,frisbee, furniture G- gain, garage, gather, general, generous, genius, gentle, gentleman, geography, gesture,\xa0 goal,\xa0 gold,\xa0 golden,\xa0 golf,\xa0 goodness,\xa0 government,\xa0 granddaughter, grandson, greedy, greet, guard, guest, guide, gun H- hair dresser, haircut, hall, hammer, handkerchief, handle, hanger, hardly, heater, helicopter, hero, highway, hip, hippo, hire, hole, homesick, honesty, hop, horrible, host, housework, hug, human, humble, humid, humor, humorous, hunger, hunter I- ignore,\xa0 ill,\xa0 imagine,\xa0 impolite,\xa0 importance,\xa0 impossible,\xa0 improve,\xa0 include, income, increase, independent, indicate, influence, information, ink, insist,inspire,\xa0\xa0 instant,\xa0\xa0 instrument,\xa0\xa0 intelligent,\xa0\xa0 international,\xa0\xa0 interrupt, introduce, invent, invitation, iron J- jam, jazz, jealous, jeep, journalist, judge K- kangaroo, ketchup, kilometer, kindergarten, kingdom, kitten,koalaL-lack, lady, lamb, lantern, latest, latter, law, lay, leaf, lettuce, lick, lid, lift, lightning, likely, limit, link, liquid, liter, loaf, local, lock, locker, loser M- ma'am, magazine, magician, major, male, mall, manager, mango, manner, marry, marvelous,\xa0 mass,\xa0 master, mat,\xa0 match,\xa0 maximum,\xa0 meaning,\xa0 measure,mechanic, memory, men's room, message, metal, meter, method, microwave, midnight, minor, minus, mirror, mix, model, monster, mosquito, motion, movement, MRT, musician N- napkin, narrow, nation, natural, naughty, nearly, necessary, necklace, needle, negative, neither, nephew, nervous, nest, net, nice-looking, niece,nod, none, nor, novel, nut O- obey, object, ocean, offer, omit, oneself, onion, operation, opinion, ordinary, oven, overpass, overseas, over-weight, owner, ox P- pain, painful, painter, pajamas, pale, pan, panda, pardon, parking lot, parrot, partner, passenger, path, patient, pattern, pause, peace, peaceful, pepper, perfect, period, personal, physics, pigeon, pile, pillow, pineapple, plain, platform, pleasant, pleased, plus, poem, poison, pollute, pollution, pop music, population, position, positive, potato, powder, praise, precious, president, pressure,\xa0 priest,\xa0 primary, prince, princess,\xa0 principal,\xa0 principle,\xa0 print, printer, private, produce, production, professor, progress, project, promise, pronounce, protect, provide, pump, punish, purpose, purse, puzzle \xa0\xa0 \xa0 Q- quit R- railroad, railway, raincoat, rare, rather, realize, receive, record, recover, rectangle, recycle, refuse, regret, regular, reject, remind, rent,repair, respect, responsible, result, return, review, revise, rob, role, roller skate (roller blade),roof, rub, rubber, rude, ruin, rush \n", 'tags': '', 'url': '拯救英文.html'}, {'title': 'meeting', 'text': 'W10 第一次 meeting \n \n W11 第二次 meeting \n \n W12 第三次 meeting \n \n w13 第四次 meeting \n \n w14 第五次 meeting \n \n w15第6次會議 \n \n', 'tags': '', 'url': 'meeting.html'}, {'title': 'steps to establish ssh', 'text': '1.下載 putty 和 protablegit \n 2.再命令列輸入 sh enter \n 3. \n 輸入ssh-key -t rsa -b 4096 -C "使用者學號" \n  enter \n 4.在home/.ssh目錄裡建立一個檔名為config的批次檔 \n y:\\home\\.ssh\\config 中的指令設定:\n\nProxyCommand y:/putty/plink.exe github.com %h %p\n \nHost github.com\n    User git\n    Port 22\n    Hostname github.com\n \n    TCPKeepAlive yes\n    IdentitiesOnly yes \n 5.打開puttygen把剛建立好的ssh目錄裡的id_rsa目錄裡的id_rsa的鑰始打開，並存成private key \n 6.將id_rsa.pub的內容複製一分到github設定裡的ssh \n 7.將倉儲裡的.git目錄下的config裡面的url改成 \n url = git@github.com:學號/倉儲名稱.git \n 8.再啟動檔裡添加ssh的路近 \n set GIT_HOME=%Disk%:\\portablegit\\bin\\\nset GIT_SSH=%Disk%:\\putty\\plink.exe\n \n 9.打開putty在session裡輸入github.com \n \n \n 在到ssh下的auth把之前轉成privatekey的鑰始載入存起來按open就完成了 \n \n', 'tags': '', 'url': 'steps to establish ssh.html'}]};