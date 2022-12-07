/**
 * Emoji library
 * https://missive.github.io/emoji-mart/
 */
import { useEffect, useRef } from 'react';

import data from '@emoji-mart/data';
import { Picker } from 'emoji-mart';

/**
 * WordPress dependencies
 * https://developer.wordpress.org/block-editor/how-to-guides/format-api/2-toolbar-button/
 * https://github.com/gziolo/gutenberg-times/blob/master/src/index.js
 */
import { __, sprintf } from '@wordpress/i18n';
import { BlockControls } from '@wordpress/block-editor';
import { Popover, ToolbarGroup, ToolbarButton } from '@wordpress/components';
import { toggleFormat, removeFormat, registerFormatType, insert } from '@wordpress/rich-text';

const name = 'emoji-picker/emoji';

const getLocale = async () => {
	const i18n = document.getElementsByTagName( 'html' )[ 0 ].getAttribute( 'lang' ).substring( 0, 2 );
	try {
		return await require( `../../assets/i18n/${ i18n }.json` );
	} catch ( err ) {
		return null; // Fallback is "English"
	}
}

const EmojiPicker = ( props ) => {
	const ref = useRef();
	useEffect( () => {
		new Picker( { ...props, data, ref, i18n: getLocale } );
	}, [] );

	return <div ref={ ref } />;
}

const addEmoji = ( { isActive, value, onChange, onFocus } ) => {
	const onClick = () => {
		if ( isActive ) {
			onChange( removeFormat( value, name ) );
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
			{ isActive && (
				<Popover headerTitle={ __( 'Emoji Popover', 'emoji-toolbar' ) } animate={ false }>
					<EmojiPicker
						onEmojiSelect={
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
			)}
		</BlockControls>
	);
};

registerFormatType( name, {
	title: 'Emoji',
	tagName: 'span',
	className: 'emoji',
	edit: addEmoji,
} );
