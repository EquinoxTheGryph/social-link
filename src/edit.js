/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {
	useBlockProps,
	RichText,
	AlignmentControl,
	BlockControls,
	InspectorControls,
	ColorPalette,
	PanelColorSettings,
} from "@wordpress/block-editor";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";

import {
	TextControl,
	PanelBody,
	PanelRow,
	ToggleControl,
	ExternalLink,
} from "@wordpress/components";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	const { title, description, icon, link } = attributes;

	const onChangeTitle = (newTitle) => {
		setAttributes({ title: newTitle === undefined ? "" : newTitle });
	};
	const onChangeDescription = (newDescription) => {
		setAttributes({
			description: newDescription === undefined ? "" : newDescription,
		});
	};
	const onChangeIcon = (newIcon) => {
		setAttributes({ icon: newIcon === undefined ? "" : newIcon });
	};
	const onChangeLink = (newLink) => {
		setAttributes({ link: newLink === undefined ? "" : newLink });
	};

	return (
		<section {...useBlockProps()}>
			<InspectorControls>
				<PanelBody
					title={__("Link Settings", "social-link")}
					initialOpen={true}
				>
					<PanelRow>
						<fieldset>
							<TextControl
								label={__("Title", "social-link")}
								value={title}
								onChange={onChangeTitle}
								help={__("Title of the button", "social-link")}
							/>
						</fieldset>
					</PanelRow>
					<PanelRow>
						<fieldset>
							<TextControl
								label={__("Description", "social-link")}
								value={description}
								onChange={onChangeDescription}
								help={__("Description of the button", "social-link")}
							/>
						</fieldset>
					</PanelRow>
					<PanelRow>
						<fieldset>
							<TextControl
								label={__("Icon", "social-link")}
								value={icon}
								onChange={onChangeIcon}
								help={__("Icon of the button (Requires a plugin like material-design-icons to be installed, also see https://materialdesignicons.com/cdn/1.6.50-dev/ for available icons)", "social-link")}
							/>
						</fieldset>
					</PanelRow>
					<PanelRow>
						<fieldset>
							<TextControl
								label={__("Link", "social-link")}
								value={link}
								onChange={onChangeLink}
								help={__("Link of the button", "social-link")}
							/>
						</fieldset>
					</PanelRow>
				</PanelBody>
			</InspectorControls>

			<a draggable="false" href={link} class="link">
				<span class="link-icon">
					<i class={icon} icon />
				</span>
				<section class="content">
					<p class="title">{title}</p>
					<p class="description">{description}</p>
				</section>
			</a>
		</section>
	);
}
