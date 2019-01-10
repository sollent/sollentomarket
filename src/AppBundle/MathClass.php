<?php

namespace AppBundle;

/**
 * Class MathClass
 * @package AppBundle
 */
class MathClass
{
    /**
     * @param int $a
     * @param int $b
     * @return int
     */
    public function sumMethod(int $a, int $b)
    {
        return $a + $b;
    }
}