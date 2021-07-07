<?php

namespace App\Lib;

use App\Models\User;

trait Helper
{
    public function slugify($string)
    {
        return str_replace(array(
            " ", '_', '-', ',', '#', '$', '&',
            '@', '*', '^', '"', "'"
        ), '-', $string);
    }

    public function generateBarcodeNumber()
    {
        $number = mt_rand(1000000000, 9999999999); // better than rand()

        // call the same function if the barcode exists already
        if ($this->barcodeNumberExists($number)) {
            return $this->generateBarcodeNumber();
        }
        // otherwise, it's valid and can be used
        return $number;
    }

    public function barcodeNumberExists($number)
    {
        // query the database and return a boolean
        // for instance, it might look like this in Laravel
        return User::whereBarcodeNumber($number)->exists();
    }
}
