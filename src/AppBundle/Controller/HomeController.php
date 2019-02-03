<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class HomeController
 * @package AppBundle\Controller
 */
class HomeController extends Controller
{
    /**
     * @param Request $request
     * @Route("/", name="homepage-action")
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function indexAction(Request $request)
    {
        return $this->render('default/homepage.html.twig');
    }

    /**
     * @param Request $request
     * @Route("/catalog", name="catalog-page-action")
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function catalogAction(Request $request)
    {
        return $this->render('default/catalog-page.html.twig');
    }

    /**
     * @param Request $request
     * @Route("/news", name="news-page-action")
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function newsAction(Request $request) {
        return $this->render('default/news-page.html.twig');
    }

    /**
     * @param Request $request
     * @Route("/product", name="product-page-action")
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function productAction(Request $request) {
        return $this->render('default/product-page.html.twig');
    }

    /**
     * @param Request $request
     * @Route("/cart", name="cart-page-action")
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function cartPage(Request $request) {
        return $this->render('default/cart-page.html.twig');
    }

}