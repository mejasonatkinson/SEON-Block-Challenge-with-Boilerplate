/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
export default function save({ attributes }) {
	const { image, heading, textarea, ctaLink, ctaText, reverseLayout, alt } = attributes;
	{ useBlockProps }
	return (
		<div { ...useBlockProps.save() }>
			<div className={`two-columns-block ${reverseLayout ? 'column--reverse' : ''}`}>
				<div className="column image-column">
					<img src={image} alt={ alt || 'Cover Image' } className="image-column__image"/>
				</div>

				<div className="column text-column">
					<h2 className="text-column__heading">{heading}</h2>
					<div className="text-column__content">{textarea}</div>
					<a href={ctaLink} className="text-column__cta-link">
						{ctaText}
						<svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-column__cta-link-icon">
							<path d="M0.75 6.65527H11.25M11.25 6.65527L6.375 11.5303M11.25 6.65527L6.375 1.78027" stroke="#3C72FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>
					</a>
				</div>
			</div>
		</div>
	);
}
