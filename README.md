# create-component
shortcut method for creating vue components in specific directory structure.

## Installation

```bash
npm --save install vue-component-dir
```
## Usage
Open terminal and enter the command
```bash
node_modules/vue-component-dir/create.js filename filePath

example:
node_modules/vue-component-dir/create.js new-component-name src/components
```
In the above CLI, the 'new-component' component will be created in 'src/components' directory.

```
another example:
node_modules/vue-component-dir/create.js resume-generator src/components/resume
```
In the above CLI, if 'resume' folder is not available under 'src/components', we will create 'resume' folder and place 'resume-generator.vue' file in specified folder.

## Result
```html
<template>
	<div id="resume">
		
	</div>
</template>

<script>
	export default {
		name: 'resume',
		data () {
			return {

			}
		},
		created () {

		},
		mounted () {

		},
		computed: {

		},
		watch: {

		},
		methods: {

		}
	}
</script>
```
