/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
// import { useBlockProps } from '@wordpress/block-editor';

import { useBlockProps, MediaUpload } from '@wordpress/block-editor';
import { TextControl, TextareaControl, ToggleControl } from '@wordpress/components';
import { Fragment } from '@wordpress/element';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
// import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	const { image, heading, textarea, ctaLink, ctaText, reverseLayout, alt } = attributes;
	return (
		<Fragment { ...useBlockProps() }>
			<div className={`two-columns-block ${reverseLayout ? 'column--reverse' : ''}`}>
				<div className="column image-column">
					<MediaUpload
					onSelect={(media) => setAttributes({ image: media.url, alt: media.alt  })}
					type="image"
					value={image}
					render={({ open }) => (
						<button onClick={open}>
						{!image ? 'Select Image' : <img src={image} alt={ alt || 'Cover Image'} className="image-column__image" />}
						</button>
					)}
					/>
				</div>
				<div className="column text-column">
					<TextControl
					__nextHasNoMarginBottom="true"
					label="Heading"
					value={heading}
					onChange={(value) => setAttributes({ heading: value })}
					/>
					<TextareaControl
					__nextHasNoMarginBottom="true"
					label="Content"
					value={textarea}
					onChange={(value) => setAttributes({ textarea: value })}
					/>
					<TextControl
					__nextHasNoMarginBottom="true"
					label="CTA Link"
					value={ctaLink}
					onChange={(value) => setAttributes({ ctaLink: value })}
					/>
					<TextControl
					__nextHasNoMarginBottom="true"
					label="CTA Text"
					value={ctaText}
					onChange={(value) => setAttributes({ ctaText: value })}
					/>
				</div>
			</div>
			<ToggleControl
				__nextHasNoMarginBottom="true"
				label="Reverse Columns Layout"
				help={
					reverseLayout
						? 'Image on Right'
						: 'Image on Left.'
				}
				checked={ reverseLayout }
				onChange={ () => setAttributes({ reverseLayout: !reverseLayout }) }
			/>
			<hr />
		</Fragment>
	);
}
