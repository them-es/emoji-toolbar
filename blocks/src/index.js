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
import { RichTextToolbarButton } from '@wordpress/block-editor';
import {
	toggleFormat,
	removeFormat,
	registerFormatType,
	insert,
} from '@wordpress/rich-text';
import { Popover } from '@wordpress/components';

const name = 'emoji-picker/emoji';

const addEmoji = ( { isActive, value, onChange } ) => {
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
		<>
			<RichTextToolbarButton
				icon="smiley"
				title="Emoji 😀"
				onClick={ onClick }
				isActive={ isActive }
			/>
			{
				isActive && (
					<Popover
						headerTitle="Emoji Popover"
						position="bottom center"
					>
						<Picker
							theme="auto"
							autoFocus="true"
							showPreview="false"
							emojiTooltip="false"
							title=""
							onSelect={
								( emoji ) => {
									//console.log( value ); console.log( emoji.native );
									onChange(
										insert(
											value,
											emoji.native,
											value.start,
											value.end,
										)
									);
								}
							}
						/>
					</Popover>
				)
			}
		</>
	);
};

registerFormatType( name, {
	title: 'Emoji',
	tagName: 'span',
	className: 'emoji',
	edit: addEmoji,
} );