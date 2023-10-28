/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from "@wordpress/block-editor";

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
	const { title, description, icon, link } = attributes;

	return (
		<section {...useBlockProps.save()}>
			<a draggable="false" href={link} class="link">
				<span class="link-icon">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
						<path d={icon} />
					</svg>
				</span>
				<section class="content">
					<p class="title">{title}</p>
					<p class="description">{description}</p>
				</section>
			</a>
		</section>
	);
}
