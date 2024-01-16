<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Redeem extends Model
{
    protected $fillable = ['email', 'phone', 'mailing_address_1', 'mailing_address_2', 'mailing_address_3'];
}
