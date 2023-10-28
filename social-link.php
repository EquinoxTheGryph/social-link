<?php
/**
 * Plugin Name:       Social Link Block
 * Plugin URI:        equi.rocks
 * Description:       A simple button with an icon, title and description
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.1
 * Author:            Equinox
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       social-link
 *
 * @package           equinox
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function social_link_social_link_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'social_link_social_link_block_init' );
