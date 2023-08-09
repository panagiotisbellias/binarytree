import List from "components/Hoc/List/List";
import Resource from "components/General/ListItems/Resource/Resource";
import useFetchList from "lib/utils/hooks/useFetchList";

const URL = `./tool.json`;
const QUERY_KEY = "tool";

const Tool: React.FC = () => {
	const { data, isLoading, isError } = useFetchList(QUERY_KEY, URL);

	return (
		<List
			items={data}
			resourceName={QUERY_KEY}
			itemComponent={Resource}
			isLoading={isLoading}
			isError={isError}
		/>
	);
};

export default Tool;