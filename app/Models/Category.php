<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    protected $table = "Category";
    protected $primaryKey = 'CategoryID';

    public function genres(){
        return $this->hasMany(Genre::class);
    }
    public function book() {
        $this->hasMany(Book::class);
    }
}
