# Практикалық жұмыс №5

**10-нұсқа: файлдық сақтау.**

Бұл шағын жоба Node.js және Express арқылы жұмыс істейді.
Ол үш файл туралы мәлімет береді. Файлдардың өзі жүктелмейді.

## Іске қосу

Node.js және npm орнатылған болуы керек. Жоба папкасында PowerShell ашыңыз:

```powershell
npm.cmd install
$env:STUDENT_VARIANT = '10'
npm.cmd start
```

Браузерде ашыңыз:

- http://localhost:3000/ — жоба іске қосылғаны туралы мәтін.
- http://localhost:3000/info — нұсқа нөмірі.
- http://localhost:3000/files — үш файлдың JSON тізімі.

Тоқтату: Ctrl+C. `.env.example` — айнымалылардың үлгісі; ол автоматты оқылмайды.

## Негізгі файлдар

- `server.js` — сервер және үш адрес.
- `package.json` — Express тәуелділігі және іске қосу командасы.
- `package-lock.json` — орнатылған тәуелділіктердің нақты нұсқалары.
- `.gitignore` — GitHub-қа жіберілмейтін файлдар.

## Render баптауы

Web Service, Node, main тармағы, Free жоспары.
Build Command: `npm install`.
Start Command: `npm start`.
Environment: `STUDENT_VARIANT=10`.
PORT мәнін платформа өзі береді.

## Қатені тексеру

Осы оқу сервисінің Start Command мәнін уақытша `node missing.js` деп өзгертіңіз.
Жариялау журналында MODULE_NOT_FOUND қатесін табыңыз.
Содан кейін `npm start` мәнін қалпына келтіріп, қайта жариялаңыз.

Құпиясөздер мен токендерді репозиторийге жазбаңыз.


## Тұрақты жеке нұсқа
Бұл репозиторий тек №5 практикалық жұмысқа арналған. Басқа практикалар оны алмастырмайды.
Репозиторий: https://github.com/rensxm/cloud-practice-5-variant10
Жария URL: https://cloud-practice-5-variant10.onrender.com

