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
 $body = $fields['body']->content;
 $dimensions = $fields['field_dimensions']->content;
 $materials = $fields['field_materials']->content;
 $subcategory = $fields['field_subcatgory']->content;
 $years = $fields['field_years']->content;
?>
<?php foreach ($fields as $id => $field): ?>
  <?php if (!empty($field->separator)): ?>
    <?php print $field->separator; ?>
  <?php endif; ?>
  
  <?php print $field->wrapper_prefix; ?>
    <?php print $field->label_html; ?>
    
    <?php

	switch ($field->class){
		
		case "field-dimensions":
		break;
		case "field-materials":
		break;
		case "field-years":
		break;
		case "field-subcatgory":
		break;
		case "body":
		break;
		
		case "title":
			print $field->content;
			print '
			<div class="artwork-info">
			<div class="inner">
				<h1>'.$field->content.'</h1>
				<div class="artwork-details">'.$dimensions.' / '.$materials.' / '.$years.' / '.$subcategory.'</div>
				<div class="artwork-body">'.$body.'</div>
			</div>
			</div>';
		break;
		
		default:
			print $field->content;
		break;
		
	}
	
	?>
	
    
    
  <?php print $field->wrapper_suffix; ?>
<?php endforeach; ?>