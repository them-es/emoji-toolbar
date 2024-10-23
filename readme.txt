=== Emoji Toolbar ===
Contributors: them.es
Donate link: https://them.es/plugins/emoji-toolbar
Tags: Emoji, Emoticon, Editor, Gutenberg
Requires at least: 5.6
Tested up to: 6.7
Stable tag: 1.2.7
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html
Requires PHP: 7.2

A simple Emoji picker that integrates in the rich-text block toolbar.

== Description ==
Accessing the Emoji library can be painful 😫 on some operating systems. You always have to leave the editor which is not useful for distraction-free writing.

* This plugin reduces the burden by implementing an easy to use Emoji picker in the block toolbar.
* Can be used with any WordPress theme.
* Only compatible with WordPress (Gutenberg) Core. Third-party page builders will probably not work.

__Emoji Netiquette:__ Emojis have become popular culture and are here to stay but choose them wisely and avoid ❗️ excessive use in your (business) communication.

The Emoji Mart library (BSD 3-Clause "New" or "Revised" License) has been developed by Missive.

= More =

If you like this plugin and are missing a powerful Icon library in your Editor you may find our [&lt;i&gt; Toolbar](https://wordpress.org/plugins/i-toolbar/ "WordPress Plugin") plugin useful.

= Contribution? =

* The Plugin development can be followed via GitHub <3 / ❤️
* We are happy to receive feature suggestions and pull requests: [https://github.com/them-es/emoji-toolbar](https://github.com/them-es/emoji-toolbar "GitHub")

= More information =

[https://them.es/plugins/emoji-toolbar](https://them.es/plugins/emoji-toolbar)

== Screenshots ==

1. Light Theme
2. Dark Theme

== Installation ==

1. Upload the Plugin to the `/wp-content/plugins/` directory.
2. Activate it through the 'Plugins' menu in WordPress.
3. Open a page or post using the block editor, add a paragraph or heading block and select the "Emoji" menu item from the toolbar.
4. Choose an Emoji and it will appear in the content area. Simple and fast!

== Frequently Asked Questions ==

= Emojis don't show up in the content! =
* You need to make sure that your database tables use the `utf8mb4` collation to be able to natively store emoji characters: [https://make.wordpress.org/core/2015/04/02/omg-emoji-%F0%9F%98%8E](https://make.wordpress.org/core/2015/04/02/omg-emoji-%F0%9F%98%8E "make.wordpress.org")

= How do I change the skin tones? =
* Click on the yellow dot button (bottom right) in the popup and select the preferred color tone.

= I can't see any flag emojis! =
* Unfortunately not all operating systems (like Windows) support flag emojis and instead just show the two-letter country code. You can learn more about the reasons here [https://blog.emojipedia.org/emoji-flags-explained/](https://blog.emojipedia.org/emoji-flags-explained/) or follow the issue of our underlying library here [https://github.com/missive/emoji-mart/issues/816](https://github.com/missive/emoji-mart/issues/816).

= Is this plugin compatible with Multisite? =
* Yes, you can network-activate this plugin and the feature will be enabled on all sites.

= This GPL 2.0+ licensed WordPress plugin uses a BSD 3-Clause "New" or "Revised licensed library. Is the third-party code compatible with GNU GPL? =
* See https://www.gnu.org/licenses/license-list.en.html#GPLCompatibleLicenses

== Changelog ==

= 1.2.7 =
* Tested up to WordPress 6.7
* Remove load_plugin_textdomain() and rely on WordPress to load translations (https://make.wordpress.org/core/2016/07/06/i18n-improvements-in-4-6/)

= 1.2.6 =
* Tested up to WordPress 6.6
* Add a blueprint.json

= 1.2.5 =
* Update dependencies
* Unicode 15.0 support with new emoji chars 🪇

= 1.2.4 =
* Update dependencies and locales

= 1.2.3 =
* Code quality
* Documentation
* Update dependencies and locales

= 1.2.2 =
* Localization of the Picker interface
* Cleanup
* Update dependencies

= 1.2.1 =
* Update dependencies

= 1.2.0 =
* Update Emoji Mart library to 5.0 which is faster and more accessible than before
* Unicode 14.0 support with new emoji chars 🫡
* Minor styling updates

= 1.1.1 =
* Minor updates: Styling issue, Removed @import from style-editor.css, Make title translatable

= 1.1.0 =
* Fixed some deprecation warnings
* Ready for localization
* Style top-level toolbar button as 😀
* Remove button #2 from dropdown menu

= 1.0.3 =
* Drop CDN icons and load "os-specific" native Emojis in the Picker component

= 1.0.2 =
* Bugfixes: 1. Finally categories can be selected on init, 2. Fixed some console warnings

= 1.0.1 =
* Add another button in the top-level toolbar (the button in the dropdown will stay there for the time being!)
* Remove initial preview emoji from Emoji Mart

= 1.0.0 =
* Initial release
