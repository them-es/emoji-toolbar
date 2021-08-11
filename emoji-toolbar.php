<?php
/**
 * @package Emoji Toolbar
 * @version 1.0.1
 *
 * @wordpress-plugin
 * Plugin Name: Emoji Toolbar
 * Plugin URI: https://wordpress.org/plugins/emoji-toolbar
 * Description: A simple Emoji picker for rich-text blocks 😀
 * Version: 1.0.2
 * Author: them.es
 * Author URI: https://them.es/plugins/emoji-toolbar
 * License: GPL-2.0+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

/**
 * Enqueue block editor assets.
 */
function emoji_toolbar_enqueue_assets() {
	$asset_file = include __DIR__ . '/blocks/build/index.asset.php';

	wp_enqueue_script(
		'emoji-toolbar',
		plugins_url( 'blocks/build/index.js', __FILE__ ),
		$asset_file['dependencies'],
		$asset_file['version'],
		false
	);

	wp_enqueue_style(
		'emoji-toolbar-editor-css',
		plugins_url( 'assets/admin/css/style-editor.css', __FILE__ ),
		array(),
		$asset_file['version'],
		false
	);
}
add_action( 'enqueue_block_editor_assets', 'emoji_toolbar_enqueue_assets' );
