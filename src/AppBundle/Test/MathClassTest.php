<?php

namespace AppBundle\Test;

use AppBundle\MathClass;
use PHPUnit\Framework\TestCase;

/**
 * Class MathClassTest
 * @package AppBundle\Test
 */
class MathClassTest extends TestCase
{
    /**
     * @var MathClass
     */
    private $mathClass;

    protected function setUp()
    {
        $this->mathClass = new MathClass();
    }

    public function testSumMethod()
    {
        $this->assertEquals(10, $this->mathClass->sumMethod(5,5));
    }

}