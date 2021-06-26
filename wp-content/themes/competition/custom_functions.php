<?php
/*==--==--==--==--==-- Theme Style Settings --==--==--==--==--==*/
function my_custom_theme_styles() {
    //css include
    wp_register_style( 'bootstrap-css', get_stylesheet_directory_uri() . '/css/bootstrap.min.css', array(), time(), 'all'); 
    wp_enqueue_style( 'bootstrap-css' );

    wp_register_style( 'font-css', get_stylesheet_directory_uri() . '/fonts/fonts.css', array(), time(), 'all'); 
    wp_enqueue_style( 'font-css' );

    wp_register_style( 'font-aws', get_stylesheet_directory_uri() . '/fonts/font-awesome.min.css', array(), time(), 'all'); 
    wp_enqueue_style( 'font-aws' );
    
    wp_register_style( 'animate', get_stylesheet_directory_uri() . '/css/animate.min.css', array(), time(), 'all'); 
    wp_enqueue_style( 'animate' );

    wp_register_style( 'carousel', get_stylesheet_directory_uri() . '/css/owl.carousel.css', array(), time(), 'all'); 
    wp_enqueue_style( 'carousel' );

    
    wp_register_style( 'style', get_stylesheet_directory_uri() . '/css/style.css', array(), time(), 'all'); 
    wp_enqueue_style( 'style' );

    wp_register_style( 'responsive', get_stylesheet_directory_uri() . '/css/responsive.css', array(), time(), 'all'); 
    wp_enqueue_style( 'responsive' );

    //js include
    wp_register_script('jquery-min', get_stylesheet_directory_uri() . '/js/jquery-3.3.1.min.js', array( 'jquery' ), time(), true);
    wp_enqueue_script('jquery-min');

    wp_register_script('popper-min', get_stylesheet_directory_uri() . '/js/popper.min.js', array( 'jquery' ), time(), true);
    wp_enqueue_script('popper-min');

    wp_register_script('bootstrap-min', get_stylesheet_directory_uri() . '/js/bootstrap.min.js', array( 'jquery' ), time(), true);
    wp_enqueue_script('bootstrap-min');

    wp_register_script('modernizr-custom', get_stylesheet_directory_uri() . '/js/modernizr.custom.js', array( 'jquery' ), time(), true);
    wp_enqueue_script('modernizr-custom');

    wp_register_script('browser', get_stylesheet_directory_uri() . '/js/browser_selector.js', array( 'jquery' ), time(), true);
    wp_enqueue_script('browser');

    wp_register_script('owl-js', get_stylesheet_directory_uri() . '/js/owl.carousel.js', array( 'jquery' ), time(), true);
    wp_enqueue_script('owl-js');

    wp_register_script('jquery-validate', get_stylesheet_directory_uri() . '/js/jquery.validate.js', array( 'jquery' ), time(), true);
    wp_enqueue_script('jquery-validate');

    wp_register_script('script', get_stylesheet_directory_uri() . '/js/script.js', array( 'jquery' ), time(), true);
    wp_enqueue_script('script');

    //wp_register_script('ajax-script', get_stylesheet_directory_uri() . '/js/ajax_script.js', array( 'jquery' ), time(), true);
    //wp_enqueue_script('ajax-script');
    //wp_localize_script( 'ajax-script', 'admin_url', array( 'ajax_url' => admin_url( 'admin-ajax.php' ) ) );

    //wp_enqueue_script( 'ajax-script', get_stylesheet_directory_uri() . '/js/ajax_script.js', array( 'jquery' ), '1.0.0', true );
    //wp_localize_script( 'ajax-script', 'admin_url', array( 'ajax_url' => admin_url( 'admin-ajax.php' ) ) );
}
add_action( 'wp_enqueue_scripts', 'my_custom_theme_styles' );
/*==--==--==--==--==-- Theme Style Settings --==--==--==--==--==*/

/*==--==--==--==--==-- Theme Settings Start --==--==--==--==--==*/
if( function_exists('acf_add_options_page') ) {
    
    acf_add_options_page(array(
        'page_title'    => 'Theme General Settings',
        'menu_title'    => 'Theme Settings',
        'menu_slug'     => 'theme-general-settings',
        'capability'    => 'edit_posts',
        'redirect'      => false
    ));
    
   /* acf_add_options_sub_page(array(
        'page_title'    => 'Theme Header Settings',
        'menu_title'    => 'Header',
        'parent_slug'   => 'theme-general-settings',
    ));
    
    acf_add_options_sub_page(array(
        'page_title'    => 'Theme Footer Settings',
        'menu_title'    => 'Footer',
        'parent_slug'   => 'theme-general-settings',
    ));*/
    
}
/*==--==--==--==--==-- Theme Settings End   --==--==--==--==--==*/

// disable for posts
add_filter('use_block_editor_for_post', '__return_false', 10);
// disable for post types
add_filter('use_block_editor_for_post_type', '__return_false', 10);

