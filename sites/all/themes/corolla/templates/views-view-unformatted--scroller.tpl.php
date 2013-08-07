<?php
/**
 * @file views-view-unformatted.tpl.php
 * Default simple view template to display a list of rows.
 *
 * @ingroup views_templates
 */
?>
<div id="makeMeScrollable">
<?php $i=0; ?>
<?php foreach ($rows as $id => $row): ?>
  <?php
  $project = $view->result[$i]->field_field_project_1[0]['rendered']['#markup'];
  $class = strtolower (str_replace(' ','-',$project));
  $i++;
  ?>
  <div rel="<?php print $class; ?>" class="<?php print $classes_array[$id]; ?> ">
    <?php print $row; ?>
  </div>
<?php endforeach; ?>
</div>