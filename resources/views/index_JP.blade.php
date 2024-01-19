<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Website</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    <style>
        .input-field {
            background: white;
            padding: 12px 20px;
            margin: 8px 0;
            display: inline-block;
            border: none;
            border-bottom: 2px solid lightgray;
            box-sizing: border-box;
            width: 100%;
        }

        .submit-button {
            width: 100%;
            background: lightgray;
            color: black;
            padding: 14px 20px;
            margin: 8px 0;
            border: none;
            cursor: pointer;
        }

        .submit-button:hover {
            background-color: #ddd;
        }

        .nav-button {
            background: white;
            color: black;
            padding: 10px 20px;
            margin: 10px;
            border: 2px solid lightgray;
            cursor: pointer;
        }

        .nav-button:hover {
            border-color: black;
        }

        .mail-to-address {
            text-align: center; /* Centering the address text */
            margin-top: 20px;
            margin-bottom: 20px;
        }
    </style>
</head>
<body class="bg-white">

    <!-- Navigation Buttons -->
    <div class="text-center mt-4">
        <button onclick="location.href='#mint'" class="nav-button">Mint</button>
        <button onclick="location.href='#redeem'" class="nav-button">Redeem</button>
        <button onclick="location.href='#docs'" class="nav-button">Docs</button>
        <button onclick="switchLanguage()" class="nav-button">English</button>
    </div>

    <!-- Mint Section -->
    <section id="mint" class="min-h-screen flex items-center justify-center">
        <div class="p-6 max-w-lg mx-auto">
            <form action="/mint" method="POST">
            @csrf  <!-- CSRF Token -->

                <input type="email" name="email" placeholder="Email" class="input-field">
                <input type="text" name="tracking_number" placeholder="Tracking Number" class="input-field" >
                <input type="text" name="ethereum_address" placeholder="Ethereum Address" class="input-field" >
                
                <!-- Mail To Address Text -->
                <div class="mail-to-address">
                    <p>Mail To Address:</p>
                    <p>1234 Fancy Street, Suite 100</p>
                    <p>Newtown, Imaginaria, 54321</p>
                </div>
                
                <button type="submit" class="submit-button">Mint</button>
            </form>
        </div>
    </section>

    <!-- Redeem Section -->
    <section id="redeem" class="min-h-screen flex items-center justify-center">
        <div class="p-6 max-w-lg mx-auto">
            <form action="/redeem" method="POST">
                <input type="email" name="email" placeholder="Email" class="input-field">
                <input type="text" name="phone" placeholder="Phone" class="input-field">
                <input type="text" name="mailing_address_1" placeholder="Mailing Address" class="input-field">
                <input type="text" name="mailing_address_2" placeholder="Mailing Address" class="input-field">
                <input type="text" name="mailing_address_3" placeholder="Mailing Address" class="input-field">
                <button type="submit" class="submit-button">Redeem</button>
            </form>
        </div>
    </section>

    <!-- Docs Section -->
    <section id="docs" class="min-h-screen flex items-center justify-center">
        <div class="p-6 max-w-lg mx-auto">
            <h2 class="text-lg font-semibold mb-4">Documentation</h2>
            <p class="mb-4">Welcome to our site! Here you can find everything you need to know about using our platform. Whether you're looking to mint or redeem, we've got you covered.</p>
            <p class="mb-4">Our platform offers a variety of features including, but not limited to, minting digital assets, redeeming offers, and managing your portfolio with ease.</p>
            <p class="mb-4">We are committed to providing a seamless experience for our users. If you have any questions or need assistance, our support team is always here to help.</p>
        </div>
    </section>


    <script>
        function switchLanguage() {
            // Replace 'http://example.jp' with the actual URL for your Japanese site
            window.location.href = 'http://itadaku.xyz/en';
        }
    </script>

</body>
</html>
