/**
 * Emoji library
 * https://missive.github.io/emoji-mart/
 */
import { Picker } from 'emoji-mart';

/**
 * WordPress dependencies
 * https://developer.wordpress.org/block-editor/how-to-guides/format-api/2-toolbar-button/
 * https://github.com/gziolo/gutenberg-times/blob/master/src/index.js
 */
import {
	__,
	sprintf,
} from '@wordpress/i18n';
import {
	BlockControls,
} from '@wordpress/block-editor';
import {
	Popover,
	ToolbarGroup,
	ToolbarButton,
} from '@wordpress/components';
import {
	toggleFormat,
	removeFormat,
	registerFormatType,
	insert,
} from '@wordpress/rich-text';

const name = 'emoji-picker/emoji';

const addEmoji = ( { isActive, value, onChange, onFocus } ) => {
	const onClick = () => {
		if ( isActive ) {
			onChange(
				removeFormat( value, name )
			);
			return;
		}

		onChange(
			toggleFormat( value, {
				type: name,
			} )
		);
	};

	return (
		<BlockControls>
			<ToolbarGroup>
				<ToolbarButton
					icon="smiley"
					label={ sprintf( __( 'Add Emoji %s', 'emoji-toolbar' ), '😀' ) }
					className="emoji-toolbar"
					onClick={ onClick }
				/>
			</ToolbarGroup>
			{
				isActive && (
					<Popover
						headerTitle={ __( 'Emoji Popover', 'emoji-toolbar' ) }
						animate={ false }
					>
						<Picker
							theme="auto"
							autoFocus={ true }
							showPreview={ true }
							emojiTooltip={ false }
							native={ true }
							title=""
							emoji=""
							i18n={ {
								search: __( 'Search', 'emoji-toolbar' ),
								clear: __( 'Clear', 'emoji-toolbar' ), // Accessible label on "clear" button
								notfound: __( 'No Emoji found', 'emoji-toolbar' ),
								skintext: __( 'Choose your default skin tone', 'emoji-toolbar' ),
								categories: {
									search: __( 'Search Results', 'emoji-toolbar' ),
									recent: __( 'Frequently Used', 'emoji-toolbar' ),
									smileys: __( 'Smileys & Emotion', 'emoji-toolbar' ),
									people: __( 'People & Body', 'emoji-toolbar' ),
									nature: __( 'Animals & Nature', 'emoji-toolbar' ),
									foods: __( 'Food & Drink', 'emoji-toolbar' ),
									activity: __( 'Activity', 'emoji-toolbar' ),
									places: __( 'Travel & Places', 'emoji-toolbar' ),
									objects: __( 'Objects', 'emoji-toolbar' ),
									symbols: __( 'Symbols', 'emoji-toolbar' ),
									flags: __( 'Flags', 'emoji-toolbar' ),
									custom: __( 'Custom', 'emoji-toolbar' ),
								},
								categorieslabel: __( 'Emoji Categories', 'emoji-toolbar' ), // Accessible title for the list of categories
								skintones: {
									1: __( 'Default Skin Tone', 'emoji-toolbar' ),
									2: __( 'Light Skin Tone', 'emoji-toolbar' ),
									3: __( 'Medium-Light Skin Tone', 'emoji-toolbar' ),
									4: __( 'Medium Skin Tone', 'emoji-toolbar' ),
									5: __( 'Medium-Dark Skin Tone', 'emoji-toolbar' ),
									6: __( 'Dark Skin Tone', 'emoji-toolbar' ),
								},
							} }
							onSelect={
								( emoji ) => {
									// Insert value
									onChange(
										// console.log( value ); console.log( emoji.native );
										insert(
											value,
											emoji.native,
										)
									);
									// Keep focus in RichText field
									onFocus();
								}
							}
						/>
					</Popover>
				)
			}
		</BlockControls>
	);
};

registerFormatType( name, {
	title: 'Emoji',
	tagName: 'span',
	className: 'emoji',
	edit: addEmoji,
} );