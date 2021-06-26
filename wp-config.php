<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'competition_db' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'c2-gV7!^2BJBM;vz,_K+_sfUaSjWs#8>6F[*07)AV}E]eZ`aykhsAbMY8-i5#40:' );
define( 'SECURE_AUTH_KEY',  'Q^]4CIA*8K+y+p(M GF^iY][>0Or|eC}EpRMSY}aV!*~s]}z:,LGDcN%-]|>kkfc' );
define( 'LOGGED_IN_KEY',    'HqPOWAlK95A=RC/{oL0.(BAU-@y`f{r&Y3s6|` pdV0hI*d_!?[?XzEaAzPkT)qR' );
define( 'NONCE_KEY',        'LrCB<r[w &3?#m:VX Pw?Os#q_ml8F<Q` Dl&Frtsy%9AkI*Z8`) tMyr]$#cM6f' );
define( 'AUTH_SALT',        'N*iD~k_BuFXdE:`~uI#r !(fJ- ~;6v[gO8!_ tJz`Mu*bk/[JT5{H Z^t~K}&k|' );
define( 'SECURE_AUTH_SALT', 'DcHGlG,|:tB4,;L]:9St;C:O;w;T#yGh@y@NR?qIhG+u{`6)fy(;4qz}1^:mxa.,' );
define( 'LOGGED_IN_SALT',   '-oDOC/N(v`rqqul{o-w9ljv{q S2]&Vq6}Lb3HnmQ7zS@{Uf81=O0zeOVv/<xu!x' );
define( 'NONCE_SALT',       'xC3t<iL,X9O4b:.1.Cht(1*~:@V80>k-ee)/uCe >_uSe?D3-|ql06]>R]1944}l' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
