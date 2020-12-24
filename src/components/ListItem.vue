<template>
	<div>
		<ul class="list">
			<li class="post" v-for="item in listItems">
				<div class="points">{{item.points || '-'}}</div>
				<div>
					<p class="title">
						<template v-if="item.domain">
							<a v-bind:href="item.url">{{item.title}}</a>
						</template>
						<template v-else>
							<router-link v-bind:to="`/item/${item.id}`">{{item.title}}</router-link>
						</template>
					</p>
					<small class="link-text">
						{{item.time_ago}}
						by
						<router-link v-if="item.user" v-bind:to="`/user/${item.user}`">{{item.user}}</router-link>
						<span v-else>{{item.domain}}</span>
					</small>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	computed: {
		listItems() {
			return this.$store.state.list;
		}
	}
};
</script>

<style scoped>
.list {
	margin: 0;
	padding: 0;
}
.post {
	padding: 0.5rem 0;
	display: flex;
	align-items: center;
	border-bottom: 1px solid #eee;
}
.points {
	width: 80px;
	text-align: center;
	flex-shrink: 0;
	color: #42b883;
}
.link-text {
	color: #777;
}
</style>

