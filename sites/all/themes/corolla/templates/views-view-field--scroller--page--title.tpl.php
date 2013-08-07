<?php

/**
 * @file
 * This template is used to print a single field in a view.
 *
 * It is not actually used in default Views, as this is registered as a theme
 * function which has better performance. For single overrides, the template is
 * perfectly okay.
 *
 * Variables available:
 * - $view: The view object
 * - $field: The field handler object that can process the input
 * - $row: The raw SQL result that can be used
 * - $output: The processed output that will normally be used.
 *
 * When fetching output from the $row, this construct should be used:
 * $data = $row->{$field->field_alias}
 *
 * The above will guarantee that you'll always get the correct data,
 * regardless of any changes in the aliasing that might happen if
 * the view is modified.
 */
?>
<?php 

 //print $output; 

 $content = explode(' | ', $output);
 
 switch($content[0]) {
  case 'The Year':
    $type = 'year';
	$year = explode('&gt;', $content[2]);
	$nid = get_nid($year[0]);
	print l($content[2], 'artwork-gallery', array('query' => array( $type => $nid)));
   break;
  case 'The Medium':
    $type = 'mediums';
	$medium = explode('&gt;', $content[2]);
	$nid = get_nid($medium[0]);
	print l($content[2], 'artwork-gallery', array('query' => array( $type => $nid)));
   break;
  case 'The Project':
    $type = 'project';
	$nid = get_nid($content[1]);
	print l($content[2], 'artwork-gallery', array('query' => array( $type => $nid)));
   break;
   default:
    $type = '';
   break;
 }
 
 //print '<a href="/artwork-gallery?' . $type . '=' . $content[1] . '">' . $content[2]. '</a>';
?>