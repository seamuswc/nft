<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>あなたのウェブサイト</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://cdn.jsdelivr.net/gh/ethereum/web3.js@1.3.4/dist/web3.min.js"></script>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.9.3/css/bulma.min.css">
    <link rel="stylesheet" href="{{ asset('css/styles.css') }}">
</head>
<body>

        <div class="container has-text-centered">
            
            <div class="columns is-desktop">
                <div class="column">
                    <!-- This space is intentionally left blank for offset on larger screens -->
                </div>
                <div class="column responsive-content">
                    <div class="field">
                        <button class="button is-primary" id="connectWalletButton">Connect to MetaMask</button>
                        <div class="content mt-4">
                            Connected Network: <span id="networkConnected">Not connected</span><br>
                            Connected Address: <span id="walletAddress">Not connected</span>
                        </div>
                    </div>
                </div>
            </div>

    <!-- Navigation Buttons -->
    <div class="buttons has-addons is-centered" style="margin-top: 20px;">
        <button onclick="location.href='#mint'" class="button custom-button">ミント</button>
        <button onclick="location.href='#redeem'" class="button custom-button">引き換える</button>
        <button onclick="location.href='#docs'" class="button custom-button">ドキュメント</button>
        <button onclick="switchLanguage()" class="button custom-button">English</button>
    </div>

    <!-- Mint Section -->
    <section id="mint" class="section">
        <div class="custom-container">
            <form class="form-centered" action="/mint" method="POST">
                @csrf  <!-- CSRF Token -->
                <div class="control">
                    <button type="submit" class="button custom-submit-button">ミント</button>
                </div>
                <br>
                <div class="field custom-field">
                    <input class="input" type="email" name="email" placeholder="メール">
                </div>
                <div class="field custom-field">
                    <input class="input" type="text" name="tracking_number" placeholder="追跡番号">
                </div>
                
                <div class="has-text-centered">
                    <br>
                    <p>送付先住所:</p>
                    <p>1234 Fancy Street, Suite 100</p>
                    <p>Newtown, Imaginaria, 54321</p>
                    <br>
                </div>
                <input type="hidden" name="nft_id" id="nft_id">
                <input type="hidden" name="tx_hash" id="tx_hash">
            </form>
        </div>
    </section>

    <!-- Redeem Section -->
    <section id="redeem" class="section">
        <div class="custom-container">
            <form class="form-centered" action="/redeem" method="POST">
                <div class="control">
                    <button type="submit" class="button custom-submit-button">引き換える</button>
                </div>
                <br>
                <div class="field custom-field">
                    <input class="input" type="email" name="email" placeholder="メール">
                </div>
                <div class="field custom-field">
                    <input class="input" type="text" name="phone" placeholder="電話">
                </div>
                <div class="field custom-field">
                    <input class="input" type="text" name="mailing_address_1" placeholder="郵送先住所">
                </div>
                <div class="field custom-field">
                    <input class="input" type="text" name="mailing_address_2" placeholder="追加の郵送先住所">
                </div>
                <div class="field custom-field">
                    <input class="input" type="text" name="mailing_address_3" placeholder="追加の郵送先住所">
                </div>
                
            </form>
        </div>
    </section>

    <!-- Docs Section -->
    <section id="docs" class="section">
        <div class="custom-container">
            <div class="content custom-content">
                <h2 class="custom-title">ドキュメント</h2>
                <p>当サイトへようこそ！当プラットフォームの使用方法について知りたいことが全てここにあります。ミントするものか引き換えるものか、私たちがサポートします。</p>
                <p>当プラットフォームは、デジタル資産のミント化、オファーの引き換え、ポートフォリオの簡単な管理など、様々な機能を提供しています。</p>
                <p>私たちはユーザーにシームレスな体験を提供することに尽力しています。ご質問がある場合や支援が必要な場合は、いつでもサポートチームがお手伝いします。</p>
            </div>
        </div>
    </section>

    <script>
        function switchLanguage() {
            window.location.href = 'http://itadaku.xyz/en';
        }
    </script>


    @vite('resources/js/app.js')

</body>
</html>
