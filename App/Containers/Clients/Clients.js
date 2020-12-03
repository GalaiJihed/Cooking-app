import {

	RefreshControl,
	View,
	FlatList,
	ActivityIndicator,
} from 'react-native'
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ClientsActions from 'App/Stores/Clients/Actions'

const Clients = () => {
	const clients = useSelector((state) => state.clients.clients)
	const clientsLoading = useSelector((state) => state.clients.clientsLoading)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(ClientsActions.fetchClients())
	}, [])



	const [refreshing, setRefreshing] = useState(false)

	const onRefresh = React.useCallback(() => {}, [])

	if (clientsLoading) {
		return (
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<ActivityIndicator />
			</View>
		)
	}

	return (
		<FlatList
			style={{ marginTop: 40 }}
			data={clients}
			refreshControl={<RefreshControl refreshing={false} onRefresh={onRefresh} />}
			renderItem={({ item }) => (
				<View style={{ justifyContent: 'center', marginBottom: 10 }}>
					{/*<ListItem item={item}/>*/}
				</View>
			)}
		/>
	)
}

export default Clients
