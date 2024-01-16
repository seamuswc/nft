<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Mint extends Model
{
    protected $fillable = ['email', 'tracking_number', 'ethereum_address', 'mail_to_address'];
}
