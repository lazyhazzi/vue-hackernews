<template>
	<list-item></list-item>
	<!-- <div>
		<ul class="list">
			<li class="post" v-for="item in askItems">
				<div class="points">{{item.points}}</div>
				<div>
					<p class="title">
						<router-link v-bind:to="`/item/${item.id}`">{{item.title}}</router-link>
					</p>
					<small class="link-text">
						{{item.time_ago}}
						by
						<router-link v-bind:to="`/user/${item.user}`">{{item.user}}</router-link>
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

