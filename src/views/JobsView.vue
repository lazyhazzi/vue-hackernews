<template>
	<list-item></list-item>
	<!-- <div>
		<ul class="list">
			<li class="post" v-for="item in jobsItems">
				<div>
					<p class="title">
						<a v-bind:href="item.url">{{item.title}}</a>
					</p>
					<small class="link-text">
						{{item.time_ago}}
						<a :href="item.url" target="_blank">{{item.domain}}</a>
					</small>
				</div>
			</li>
		</ul>
	</div>-->
</template>

<script>
import ListItem from "../components/ListItem.vue";
export default {
	components: {
		ListItem
	}
};
</script>