<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Favorite extends Model
{
    use HasFactory;

    public function blogs()
    {
        return $this->belongsTo(Blog::class, 'blog_id', 'id')
            ->orderBy('created_at', 'DESC')
            ->where('published', 1);
    }
}
