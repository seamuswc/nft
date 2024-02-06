<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMintsTable extends Migration
{
    public function up()
    {
        Schema::create('mints', function (Blueprint $table) {
            $table->id();
            $table->string('email');
            $table->string('tracking_number');
            $table->string('tx_hash');
            $table->integer('nft_id'); 
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('mints');
    }
}

