<template>
	<div :id="id"></div>
</template>

<script>
	
	import Chart from 'frappe-charts/dist/frappe-charts.min.esm';
	import Vue from 'vue';

	var chartVueData = {};
	var chart;

	export default {
		name: 'Chart',
		data() {
			return chartVueData;
		},
		mounted: function() {
			chart = new Chart( `#${ this.id }`, this.options );
		},
		props: {
			id: {
				type: String,
				required: true,
			},
			options: {
				type: Object,
				required: true,
			},
		},
	};

/*
chart options
	{
    data: {
      labels: [ String ],
      datasets: [ Dataset ],	// { name: String, type: String, values: [ Number ] }
      yRegions: [ Region ],		// { label: String, start: Number, end: Number }
      yMarkers: [ Marker ]		// { label: String, value: Number }
    }
    title: '',
    colors: [ String ], // which is any valid css for a color
    height: 200,
    type: String,				// one of { 'bar', 'line', 'pie', 'percentage', 'axis-mixed' }

    tooltipOptions: {
      formatTooltipX: d => (d + '').toUpperCase(),
      formatTooltipY: d => d + ' pts',
    }

    // Axis charts
    isNavigable: 1,        // default: 0
    valuesOverPoints: 1,   // default: 0
    barOptions: {
      stacked: 1           // default: 0
    }

    lineOptions: {
      dotSize: 6,          // default: 4
      hideLine: 0,         // default: 0
      hideDots: 1,         // default: 0
      heatline: 1,         // default: 0
      regionFill: 1        // default: 0
    }

    axisOptions: {
      yAxisMode: 'span',   // Axis lines, default
      xAxisMode: 'tick',   // No axis lines, only short ticks
      xIsSeries: 1         // Allow skipping x values for space
                           // default: 0
    },

    // Pie/Percentage charts

    maxLegendPoints: 6,    // default: 20
    maxSlices: 10,         // default: 20

    // Heatmap

    discreteDomains: 1,    		// default: 1
    start: startDate,      		// Date object
    legendColors: [ String ]	// which is any valid css for a color
  }

  */
</script>

<style>
	
</style>