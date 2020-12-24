<template>
	<div class="user-container">
		<div>
			<!-- 사용자 프로필 -->
			<i class="fas fa-user"></i>
		</div>
		<div class="user-description">
			<!-- 사용자 정보 -->
			<slot name="username">{{info.id}}</slot>
			<div class="time">
				<slot name="time">created : {{info.created}}</slot>
				<slot name="karma"></slot>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		info: Object
	}
};
</script>

<style scoped>
.user-container {
	display: flex;
	align-items: center;
	padding: 0.5rem;
}
.fa-user {
	font-size: 2.5rem;
}
.user-description {
	margin-left: 8px;
}
.time,
.karma {
	margin-top: 3px;
	font-size: 0.7rem;
	color: #777;
}
.karma {
	margin-left: 10px;
}
</style>
