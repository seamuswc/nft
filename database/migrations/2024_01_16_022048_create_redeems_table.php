<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRedeemsTable extends Migration
{
    public function up()
    {
        Schema::create('redeems', function (Blueprint $table) {
            $table->id();
            $table->string('email');
            $table->string('phone');
            $table->string('mailing_address_1');
            $table->string('mailing_address_2');
            $table->string('mailing_address_3');
            $table->string('tx_hash');
            $table->integer('nft_id');
            $table->boolean('redeemed')->default(false);
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('redeems');
    }
}

