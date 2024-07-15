<?php
/**
 * Plugin Name: Emoji Toolbar
 * Plugin URI: https://wordpress.org/plugins/emoji-toolbar
 * Description: A simple Emoji picker for rich-text blocks 😀
 * Version: 1.2.6
 * Author: them.es
 * Author URI: https://them.es/plugins/emoji-toolbar
 * Text Domain: emoji-toolbar
 * Domain Path: /languages
 * License: GPL-2.0+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

/**
 * Localization.
 * https://developer.wordpress.org/reference/functions/load_plugin_textdomain/
 *
 * @return void
 */
function emoji_toolbar_load_plugin_textdomain() {
	load_plugin_textdomain( 'emoji-toolbar', false, plugin_basename( dirname( __FILE__ ) ) . '/languages/' );
}
add_action( 'init', 'emoji_toolbar_load_plugin_textdomain' );

/**
 * Enqueue block editor assets.
 * https://developer.wordpress.org/reference/hooks/enqueue_block_editor_assets/
 *
 * @return void
 */
function emoji_toolbar_enqueue_assets() {
	$asset_file = include __DIR__ . '/blocks/build/index.asset.php';

	// Enqueue scripts.
	wp_enqueue_script(
		'emoji-toolbar-editor-script',
		plugins_url( 'blocks/build/index.js', __FILE__ ),
		$asset_file['dependencies'],
		$asset_file['version'],
		true
	);

	// Load script translations: https://developer.wordpress.org/reference/functions/wp_set_script_translations/
	wp_set_script_translations( 'emoji-toolbar-editor-script', 'emoji-toolbar', plugin_dir_path( __FILE__ ) . '/languages/' );

	// Enqueue styles.
	wp_enqueue_style(
		'emoji-toolbar-editor-style',
		plugins_url( 'assets/admin/css/style-editor.css', __FILE__ ),
		array(),
		$asset_file['version']
	);
}
add_action( 'enqueue_block_editor_assets', 'emoji_toolbar_enqueue_assets' );
