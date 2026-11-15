// 作品の文章・画像・動画・リンクをまとめたファイルです。
// 画像は assets/game-01.jpg、動画はMP4のパスまたはYouTubeのURLを指定できます。
// 空欄の画像・動画は準備中、リンクは未掲載として表示します。
window.portfolioWorks = [
  {
    "title": "Cube Maze",
    "genre": "3Dアクションゲーム",
    "description": "コントローラーを傾けて立体迷路を回転させ、ボールをゴールまで導く3Dアクションゲームです。ジャイロ操作を生かし、迷路の向きやボールの動きを見ながら進んでいきます。",
    "period": "2026年7月31日〜 制作中",
    "team": "個人制作",
    "role": "企画・実装",
    "language": "C#",
    "libraries": "JoyShockLibrary / DOTween / Cinemachine",
    "engine": "Unity 6000.0.75f1",
    "platform": "Windows",
    "highlight": "コントローラーの動きと迷路の回転が直感的につながるよう、ジャイロ入力を調整しました。迷路はProBuilderを使い、形状の作成から配置まで自分で行っています。",
    "thumbnail": "cubemaze-gameplay.png",
    "thumbnailCaption": "Cube Mazeのプレイ画面です。迷路とボール、迷路操作・カメラ操作のガイドを表示しています。",
    "video": "https://youtu.be/9qpwIKrR8LE",
    "videoCaption": "迷路を回転させながら、ボールをゴールへ導くCube Mazeのプレイ映像です。",
    "captions": "",
    "links": {
      "play": "",
      "source": "https://github.com/TsukasaUrakawa/CubeMaze",
      "download": "",
      "document": ""
    },
    "development": [
      {
        "title": "担当範囲・制作内容",
        "text": "個人制作として、企画から実装までを担当しています。コントローラーの接続処理、ジャイロ入力による迷路の回転、ProBuilderでの迷路の作成・配置に取り組みました。"
      },
      {
        "title": "課題 → 工夫 → 結果",
        "text": "課題：コントローラーの姿勢をそのまま迷路に反映すると、意図しないY軸方向の回転が操作に混ざっていました。\n工夫：キャリブレーション時の基準姿勢との差から、Y軸まわりのねじれと傾きを分離し、必要な傾きだけを反映する構成にしました。\n結果：迷路の向きを決める基準と、手元の傾きによる操作を分けて扱えるようにしました。",
        "links": [
          {
            "label": "ジャイロ制御のコード",
            "url": "https://github.com/TsukasaUrakawa/CubeMaze/blob/main/Assets/Project/Scripts/GyroController.cs"
          }
        ]
      },
      {
        "title": "設計・技術の選定理由",
        "text": "学習中のUnityを使い、3Dゲームの制作に挑戦したいと考えました。コントローラーのジャイロを操作に取り入れ、手元で傾けた動きが迷路の回転につながる遊びを目指しています。\n入力された回転をすべて反映するのではなく、操作に必要な回転を見極めて調整しました。"
      },
      {
        "title": "開発環境・制作の進め方",
        "text": "UnityとVisual Studioを使用して個人制作しています。最初にコントローラーの接続処理を作り、その後、迷路の作成とジャイロ操作の実装を進めました。\n実装の途中でも実際にプレイして動作を確認し、操作時に気になった点や不具合を調整・修正しています。"
      },
      {
        "title": "接続状態と操作モードの管理",
        "text": "コントローラーの検索・選択・キャリブレーション・使用中を状態として分け、切断時は接続準備へ戻る構成です。接続状態の変更はイベントでUIへ通知します。\n迷路側も通常操作、90度回転、観察、復帰中の停止を区別し、処理の途中で別の操作が混ざらないようにしています。",
        "links": [
          {
            "label": "接続管理のコード",
            "url": "https://github.com/TsukasaUrakawa/CubeMaze/blob/main/Assets/Project/Scripts/DeviceConnectManager.cs"
          }
        ]
      },
      {
        "title": "カメラと操作方向の連携",
        "text": "Cinemachineを使い、観察モードではボールの周囲を90度ずつ見回せるようにしています。観察後はカメラの水平な向きを操作の基準にし、見ている方向と手元の傾きが対応する構成です。\n回転は補間して滑らかにし、迷路への反映にはFixedUpdateとRigidbody.MoveRotationを使用しています。",
        "links": [
          {
            "label": "カメラ制御のコード",
            "url": "https://github.com/TsukasaUrakawa/CubeMaze/blob/main/Assets/Project/Scripts/CameraOrbitController.cs"
          },
          {
            "label": "操作基準のコード",
            "url": "https://github.com/TsukasaUrakawa/CubeMaze/blob/main/Assets/Project/Scripts/GyroController.cs"
          }
        ]
      }
    ],
    "guide": [
      {
        "title": "操作方法・入力デバイス",
        "text": "使用コントローラー：Flydigi Vader 4 Pro / DualSense。\n基本操作：コントローラーを傾けて迷路を回転させ、ボールを転がします。\n十字ボタン：ピッチ方向・ロール方向に90°回転。\nNボタン：迷路の傾きを基準姿勢に戻し、観察モードに切り替え。\nL・Rボタン：観察モードでカメラを90°ずつ旋回。\nWボタン：観察した向きを操作の基準にして、通常操作へ戻る。"
      },
      {
        "title": "動作環境・起動方法",
        "text": "対応プラットフォーム：Windows。\n制作時に使用しているコントローラー：Flydigi Vader 4 Pro / DualSense。\nソースコードはGitHubで公開しています。実行ファイルの配布先と起動手順は、現在このページには掲載していません。"
      },
      {
        "title": "改善履歴・開発状況",
        "text": "ジャイロ入力を迷路に反映する処理を見直し、Y軸方向の回転を除くことで、操作中に向きがずれていく問題を解消しました。\n現在も制作を継続し、プレイしながら操作感や不具合を確認しています。"
      },
      {
        "title": "利用素材・クレジット",
        "text": "迷路の作成・配置：ProBuilderを使用。\n使用ライブラリ：JoyShockLibrary / DOTween / Cinemachine。\nその他の素材・ライセンスの表記は、確認後に追記します。"
      }
    ],
    "thumbnailAlt": "Cube Mazeの立体迷路とボール、画面下部の操作ガイド",
    "thumbnailLabel": "SCREENSHOT"
  },
  {
    "title": "Shelf Care",
    "genre": "パズルゲーム",
    "description": "本を整理し、背表紙の幾何学模様をつなげる本棚パズルです。箱から本を取り出し、同じ色の棚へ配置・入れ替えをしながら、8つの棚の完成を目指します。\n\n初めて制作したゲームをunityroomで公開するために、AIを活用してブラッシュアップした作品です。「AIを使用すると、ゲームのクオリティをどこまで高められるか」を試すことを目的に、UIのデザイン・操作性・素材を見直しました。",
    "period": "2026年6月7日〜（unityroom公開済み）",
    "team": "個人制作（AIを活用）",
    "role": "初期版の制作／AIを活用したUI・操作性・素材のブラッシュアップ",
    "language": "C#",
    "libraries": "DOTween",
    "engine": "Unity 6000.0.75f1",
    "platform": "PCブラウザ（WebGL / unityroom）",
    "highlight": "CodexとOpenAIの画像生成機能を活用し、UIデザイン、操作処理の改善、素材作成を進めました。選択中の本の強調表示、配置先のプレビュー、棚の中での移動・入れ替えなど、次の操作が分かる見せ方と、並べ直しやすさを重視しています。",
    "thumbnail": "shelf-care-gameplay.png",
    "thumbnailCaption": "完成した本棚の画面です。本の背表紙がつながり、1つの幾何学模様になります。",
    "video": "https://youtu.be/4qP1IyybPLQ",
    "videoCaption": "AIを活用したブラッシュアップ後のプレイ映像です。タイトル画面と、本の取り出し・配置・入れ替えの流れを紹介しています。",
    "captions": "",
    "links": {
      "play": "https://unityroom.com/games/shelf-care",
      "source": "https://github.com/TsukasaUrakawa/First-Game",
      "download": "",
      "document": "https://github.com/TsukasaUrakawa/First-Game/tree/main/Docs"
    },
    "development": [
      {
        "title": "制作の目的・作品の位置づけ",
        "text": "初めて制作したゲームを、unityroomで遊んでもらえる形へ仕上げるためのブラッシュアップです。AIを使用すると、既存作品のクオリティをどこまで高められるかを試す作品として制作しました。\n本を並べて模様をつなげる遊びを土台に、画面の見た目、操作の分かりやすさ、素材を見直しています。"
      },
      {
        "title": "担当範囲・AIの活用範囲",
        "text": "初期版を個人で制作し、今回のブラッシュアップでは、UI・操作処理の改修にCodex、画像素材の作成にOpenAIの画像生成機能（Codex内で使用）を活用しました。AIの利用範囲は、UIのデザインとその実装、操作性を改善するコードの修正、画像素材の作成です。\n改修版のコードやビジュアルにはAIによる制作・修正を含みます。本の背表紙をつなぐ幾何学模様や、unityroom用アイコンも、この画像生成機能で作成しています。"
      },
      {
        "title": "UI・ビジュアルの改善",
        "text": "タイトルと本編を、深い青緑・紙のような生成り・銅色の模様で統一しました。タイトルには波状に並ぶ立体の本を配置し、本編の本棚と本も3D化しています。\n本一覧には色別フィルターと残り冊数、画面下には9冊分の手持ち枠を設け、選んだ本と次の操作を確認しやすい表示にしました。",
        "links": [
          {
            "label": "3D化の仕様",
            "url": "https://github.com/TsukasaUrakawa/First-Game/blob/main/Docs/3DGameplay.md"
          },
          {
            "label": "本の描画処理",
            "url": "https://github.com/TsukasaUrakawa/First-Game/blob/main/Assets/Scripts/BookVisual3D.cs"
          }
        ]
      },
      {
        "title": "操作性・遊び続けやすさの改善",
        "text": "棚に置いた本を直接選び、空き位置への移動、別の本との入れ替え、手持ちへの返却ができるようにしました。選択中の強調表示と半透明の配置プレビューで、操作する対象と移動先を示しています。\n初回の操作案内、自動保存と「続きから」、中断してタイトルへ戻る機能を追加しました。BGM・効果音の音量調整と、画面の動きを控えめにする設定も用意しています。",
        "links": [
          {
            "label": "移動・入れ替えの仕様",
            "url": "https://github.com/TsukasaUrakawa/First-Game/blob/main/Docs/ShelfBookMovement.md"
          },
          {
            "label": "配置・交換のコード",
            "url": "https://github.com/TsukasaUrakawa/First-Game/blob/main/Assets/Scripts/BookSlot.cs"
          }
        ]
      },
      {
        "title": "設計・技術の選定理由",
        "text": "既存のUnity・C#のゲームを土台に、本の選択・配置・正解判定を保ちながら改修しました。生成した幾何学模様は背表紙ごとに切り分け、同じ画像から完成図も作ることで、本と見本の対応を揃えています。\nフェードなどの演出にはDOTweenを使用。途中から再開できるよう、配置と手持ちを保存し、unityroomで配布するためにWebGL版を用意しました。"
      },
      {
        "title": "開発環境・制作の進め方",
        "text": "Unity 6000.0.75f1 / C# / DOTweenを使用しています。Codexを使ってUIや操作処理を改修し、OpenAIの画像生成機能で作成した素材をUnityへ組み込みました。\n開発時には、本の取り出し・配置・入れ替え、保存と再開、画面サイズによる表示を確認しました。WebGLビルド後は、ブラウザ上の操作や再読み込み後の保存データの復元も確認し、unityroomへ公開しています。"
      },
      {
        "title": "保存・復元と状態の整合性",
        "text": "AIを活用した改修で、本の識別名・配置・手持ちの順番・完成した棚をJSONとして保存する仕組みを追加しました。読み込み時には本や配置位置の重複、色の不一致などを検証し、最新の記録が不正な場合は前回の正常な記録からの復元を試みます。\n本の交換では2冊の参照・位置・クリック判定を更新してから変更を通知し、交換途中の状態を保存しない構成にしています。",
        "links": [
          {
            "label": "保存・復元の仕様",
            "url": "https://github.com/TsukasaUrakawa/First-Game/blob/main/Docs/SaveAndContinue.md"
          },
          {
            "label": "保存処理のコード",
            "url": "https://github.com/TsukasaUrakawa/First-Game/blob/main/Assets/Scripts/GameProgressStore.cs"
          }
        ]
      },
      {
        "title": "WebGL公開・検証の工夫",
        "text": "公開準備では、使わなくなった旧UI画像をResourcesの外へ移し、本の模様の画質を保ちながら配信データを整理しました。開発資料の記録では、主要3ファイルの合計が約134.1MBから約101.3MBになっています。\n配置・交換・保存後の再読み込み・複数の画面サイズを確認する手順と、Unity上での検証スクリプトを公開しています。これらの改修・検証にもCodexを活用しました。",
        "links": [
          {
            "label": "WebGL公開・確認の記録",
            "url": "https://github.com/TsukasaUrakawa/First-Game/blob/main/Docs/UnityroomRelease.md"
          },
          {
            "label": "検証手順・スクリプト",
            "url": "https://github.com/TsukasaUrakawa/First-Game/blob/main/Tests/README.md"
          }
        ]
      }
    ],
    "guide": [
      {
        "title": "操作方法・入力デバイス",
        "text": "マウスを使用します。\n1. 箱をクリックし、本一覧から取り出す本を選びます。手持ちは最大9冊です。\n2. 手持ちの本を選び、同じ色の棚の空いている場所をクリックして配置します。\n3. 棚の本を選び、空き位置をクリックすると移動、別の本をクリックすると入れ替えができます。\n4. 「完成図を見る」で模様を確認し、並べ終えたら「並びをチェック」で完成を確定します。\n選択を解除するには、同じ本を再クリックするか、右クリック・Escを使用します。"
      },
      {
        "title": "動作環境・起動方法",
        "text": "PCのWebブラウザで遊ぶWebGL版をunityroomで公開しています。この作品の「プレイする」からゲームページを開いてください。\n想定環境はPC版のChrome / Edgeです。ゲームのインストールは不要です。\n進行状況は使用中のブラウザに保存されます。続きから遊ぶときは同じブラウザを使用してください。"
      },
      {
        "title": "公開状況・今回の主な更新",
        "text": "2026年11月9日にunityroomで公開しました。想定プレイ時間は約30分です。\n初期版から、タイトル・本棚・本のビジュアル、UIの配置、幾何学模様の素材を刷新しました。本の移動・入れ替え、色別フィルター、操作案内、自動保存・再開、音量と画面の動きの設定を追加しています。\n掲載している動画は、AIを活用したブラッシュアップ後のバージョンです。"
      },
      {
        "title": "利用素材・クレジット",
        "text": "AI活用：CodexによるUI・操作処理の改修。\n画像素材：OpenAIの画像生成機能（Codex内で使用）による幾何学模様・公開用アイコンなどの作成。\nUIアニメーション・画面遷移：DOTween（Demigiant）。\n段ボールのモデル：Cardboard Box (Rigged)（WeanWind / Ezereal）。\nフォント：Zen Maru Gothic / EB Garamond。\n音源の作者・配布元は確認中です。"
      },
      {
        "title": "ソースコード・制作資料の公開",
        "text": "GitHubでは「First-Game」というリポジトリ名でShelf Careのソースコードを公開しています。「ソースコード」からプロジェクト全体、「仕様・制作資料」から機能ごとの説明を確認できます。\n資料には本の配置・交換、保存と再開、UI、3D化、WebGL公開時の確認内容をまとめています。改修版のコードにはCodexによる制作・修正が含まれます。"
      }
    ],
    "extraFacts": [
      {
        "label": "公開日",
        "value": "2026年11月9日"
      },
      {
        "label": "プレイ時間",
        "value": "約30分（想定）"
      }
    ],
    "thumbnailAlt": "Shelf Careで完成したベージュの本棚と、背表紙につながる幾何学模様",
    "thumbnailLabel": "SCREENSHOT"
  },
  {
    "title": "BubblePop",
    "genre": "スコアアタックパズル",
    "description": "6×6の盤面で同じ色の泡をつなぎ、60秒間でハイスコアを目指すパズルゲームです。通常時は同じ行・列の泡を結び、間の泡をまとめて消します。フィーバー中は自由になぞった軌跡で泡を消せるようになり、コンボと大量消去を狙います。\n\nインターンで2日間かけて個人制作した作品です。自身は企画とAIへの指示を担当し、コードの実装はCodexに依頼しました。",
    "period": "2日間（インターン制作）",
    "team": "個人制作（AI活用）",
    "role": "企画・AIへの指示",
    "language": "C#",
    "libraries": "Unity Input System / TextMesh Pro",
    "engine": "Unity 6000.3.24f1",
    "platform": "Android（縦画面）",
    "highlight": "通常時の直線操作と、フィーバー中の自由ななぞり操作を切り替える構成です。終点候補や消去予定の泡を見た目で示し、犬が泡を追う動き、消去時の効果音・粒子・得点表示を組み合わせています。",
    "thumbnail": "bubblepop-feature.png",
    "thumbnailCaption": "BubblePopの紹介画像です。",
    "video": "https://www.youtube.com/shorts/caUg3j6xC7Y",
    "videoCaption": "BubblePopのプレイ映像です。Android向けの縦画面でのプレイを紹介しています。",
    "captions": "",
    "links": {
      "play": "",
      "source": "",
      "download": "",
      "document": ""
    },
    "development": [
      {
        "title": "制作背景・担当範囲",
        "text": "インターンで、AIを活用して2日間で個人制作しました。自身の担当は企画とAIへの指示です。1プレイ60秒の中で、同色の泡をつなぐ操作、コンボ、フィーバーを楽しめるゲームにまとめています。"
      },
      {
        "title": "AIの活用範囲",
        "text": "ゲームのコード実装はCodexに依頼しました。入力処理、盤面の消去判定、得点・コンボ・フィーバーの管理、UI表示や演出などにAIが作成したコードを使用しています。\nこの作品は、企画とAIへの指示を通じてゲームを形にした制作事例として紹介しています。"
      },
      {
        "title": "ゲームルール・入力の工夫",
        "text": "通常時は、同じ行または列にある同色の2つの泡を始点・終点にして、その間の泡もまとめて消します。フィーバー中は、自由になぞった経路を消去対象にし、始点とは別の同色の泡で指を離すと確定します。\n入力判定では前回と今回の指の位置を結ぶ区間を調べ、通過したマスを記録します。同じ泡を再び通っても、消去数や得点には重複して数えない構成です。"
      },
      {
        "title": "技術構成・演出",
        "text": "UnityとC#を使用し、盤面入力、泡の配置・消去判定、ゲーム進行を別々のクラスで管理しています。UIにはTextMesh Proを使い、自己ベストはPlayerPrefsへ保存します。\n犬の移動、泡の拡大・縮小、効果音、粒子、獲得点の表示を組み合わせて、操作への反応を見せています。一時停止・再開や縦画面の表示調整にも対応する構成です。"
      }
    ],
    "guide": [
      {
        "title": "基本の遊び方",
        "text": "Android端末を縦に持ち、タッチ操作で遊びます。\n1. 泡を押し、同じ行または列にある別の同色の泡までなぞります。\n2. 指を離すと、両端と間の泡がまとめて消えます。途中に違う色の泡があっても消せます。\n3. 消えた場所には新しい泡が補充されます。コンボをつなぎ、60秒間でハイスコアを目指してください。"
      },
      {
        "title": "フィーバー中の操作",
        "text": "ゲージがたまると、10秒間のフィーバーに入ります。フィーバー中は縦横の直線に限らず、自由になぞった経路の泡を消せます。\n始点とは別の、同じ色の泡で指を離すと確定します。同じ泡を何度通っても、消去は1回分です。"
      },
      {
        "title": "動作環境・掲載状況",
        "text": "対応環境：Android／縦画面／タッチ操作。\nゲーム内UIは英語です。結果画面には得点・自己ベスト・最大同時消去数を表示します。\nプレイ動画を掲載しています。公開用のプレイ先・ダウンロードリンクは、現在このページには掲載していません。\nソースコードのリポジトリは現在非公開です。"
      },
      {
        "title": "AI利用・クレジット",
        "text": "企画・AIへの指示：TSUKASA URAKAWA。\nコード実装：Codex（OpenAI）を使用。\n画像・音源・フォントなどのクレジットは準備中です。"
      }
    ],
    "linkStatus": {
      "source": "非公開"
    },
    "thumbnailAlt": "BubblePopのロゴと、カラフルな泡に手を伸ばす犬の紹介画像",
    "thumbnailLabel": "PROMO IMAGE",
    "videoAspect": "portrait"
  }
];
