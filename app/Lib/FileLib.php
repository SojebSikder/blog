<?php

namespace App\Lib;

class FileLib
{
    /**
     * Remove image from model
     */
    public static function removeImage($result, $path = 'uploads/blog/', $property = 'image')
    {
        if ($result->property != "" && \File::exists($path . $result->property)) {
            @unlink(public_path($path . $result->property));
        }
    }
    // private function removeImage($result)
    // {
    //     if ($result->image != "" && \File::exists('uploads/blog/' . $result->image)) {
    //         @unlink(public_path('uploads/blog/' . $result->image));
    //     }
    // }
}
