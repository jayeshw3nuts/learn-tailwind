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

    wp_register_style( 'owl-css', get_stylesheet_directory_uri() . '/css/owl.carousel.css', array(), time(), 'all'); 
    wp_enqueue_style( 'owl-css' );

    wp_register_style( 'tailwind-min-css', get_stylesheet_directory_uri() . '/css/tailwind.min.css', array(), time(), 'all'); 
    wp_enqueue_style( 'tailwind-min-css' );

    wp_register_style( 'tailwind-css', get_stylesheet_directory_uri() . '/css/tailwind.css', array(), time(), 'all'); 
    wp_enqueue_style( 'tailwind-css' );
       
    wp_register_style( 'style', get_stylesheet_directory_uri() . '/custom_css/style.css', array(), time(), 'all'); 
    wp_enqueue_style( 'style' );

    wp_register_style( 'responsive', get_stylesheet_directory_uri() . '/custom_css/responsive.css', array(), time(), 'all'); 
    wp_enqueue_style( 'responsive' );

    //js include   

    wp_register_script('bootstrap', get_stylesheet_directory_uri() . '/js/bootstrap.min.js', array( 'jquery' ), time(), true);
    wp_enqueue_script('bootstrap');

    wp_register_script('carousel', get_stylesheet_directory_uri() . '/js/owl.carousel.js', array( 'jquery' ), time(), true);
    wp_enqueue_script('carousel');

    wp_register_script('script', get_stylesheet_directory_uri() . '/js/script.js', array( 'jquery' ), time(), true);
    wp_enqueue_script('script');

    
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

/* optredens Post Type Start */
function w3n_optreden_collections(){
    $labels = array(
        'name' => __( 'Optreden', 'santanare' ),
        'singular_name' => __( 'Optredens', 'santanare' ),
        'add_new' => __( 'Add New', 'santanare' ),
        'add_new_item' => __( 'Add New Optreden', 'santanare' ),
        'edit_item' => __( 'Edit Optreden', 'santanare' ),
        'new_item' => __( 'New Optreden', 'santanare' ),
        'view_item' => __( 'View Optreden', 'santanare' ),
        'search_items' => __( 'Search Optreden', 'santanare' ),
        'not_found' => __( 'No Optreden Found', 'santanare' ),
        'not_found_in_trash' => __( 'No Optreden Found In Trash', 'santanare' ),
        'parent_item_colon' => '',
        'menu_name' => __( 'Optredens', 'santanare' )
    );
    $args = array(
        'labels'             => $labels,
        'menu_icon'          => 'dashicons-admin-post',
        'public'             => true,
        'publicly_queryable' => true,
        'exclude_from_search' => false,
        'capability_type'     => 'post',
        'show_ui'            => true,
        'show_in_menu'       => true,
        'query_var'          => true,
        'hierarchical'       => true,
        'menu_position'      => null,
        'rewrite' => array( 'slug' => 'optreden', 'with_front' => false ),
        'has_archive' => false,
        'supports' => array( 'title', 'editor','thumbnail', 'page-attributes','excerpt')
    );
    register_post_type('cpt_optreden', $args);
  
}
add_action('init', 'w3n_optreden_collections', 0);