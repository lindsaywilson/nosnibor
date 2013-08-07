<?php

/**
 * @file
 * Default simple view template to all the fields as a row.
 *
 * - $view: The view in use.
 * - $fields: an array of $field objects. Each one contains:
 *   - $field->content: The output of the field.
 *   - $field->raw: The raw data for the field, if it exists. This is NOT output safe.
 *   - $field->class: The safe class id to use.
 *   - $field->handler: The Views field handler object controlling this field. Do not use
 *     var_export to dump this object, as it can't handle the recursion.
 *   - $field->inline: Whether or not the field should be inline.
 *   - $field->inline_html: either div or span based on the above flag.
 *   - $field->wrapper_prefix: A complete wrapper containing the inline_html to use.
 *   - $field->wrapper_suffix: The closing tag for the wrapper.
 *   - $field->separator: an optional separator that may appear before a field.
 *   - $field->label: The wrap label text to use.
 *   - $field->label_html: The full HTML of the label to use including
 *     configured element type.
 * - $row: The raw result object from the query, with all data it fetched.
 *
 * @ingroup views_templates
 */
 //dpm($fields);
 
 $title_field  = $fields['title_field']->content;
 $body  = $fields['body']->content;
 $field_link  = $fields['field_link']->content;
 $field_link_1  = $fields['field_link_1']->content;
 
?>
<?php foreach ($fields as $id => $field):
	switch ($field->class){
	 
		case ('title-field'):
			break;
		case ('field-link-1'):
			break;
		case ('field-link'):
			break;
		case ('body'):
			break;
			
		case ('field-image'):
			
			print	'
						<div class="panel" style="background-image:url('.$field->content.')">
						<div class="inner">
							<div class="text">
								<div class="heading"><a href="'.$field_link_1.'">'.$title_field.'</a></div>
								<div class="body">'.$body.'
									<p class="readmore">'.$field_link.'</p>
								</div>
							</div>
						</div>
						</div>
					';

			break;
		
		default:
		print $field->content;
		 
 }

endforeach; ?>