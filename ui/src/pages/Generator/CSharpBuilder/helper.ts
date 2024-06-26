const BUILDER = "Builder";
const PUBLIC = "public";

export function generateBuilderMethods(
	classDefinition: string,
	imports = "",
	useImports = ""
): string {
	const classNameMatch = /class (\w+)/.exec(classDefinition);
	if (!classNameMatch) {
		return "Class name not found";
	}
	const className = classNameMatch[1];
	const classImports = imports ? `${imports}\n\n` : imports;
	const useClassImports = useImports ? `\t${useImports}\n\n` : useImports;

	// public int Id {get;set;}
	// public int Id {get; private set;}
	const propertyLines = classDefinition
		.split("\n")
		.filter((line) =>
			line
				.trim()
				.match(
					/public\s+\w+\s+\w+\s*{\s*get\s*;\s*(private\s*)?set\s*;\s*}/
				)
		);

	const properties = propertyLines.map((line) => {
		const parts = line.trim().split(" ");
		return { dataType: parts[1], propertyName: parts[2] };
	});

	const buildMethod = `\t${PUBLIC} ${className} Build()
	{
		return new ${className}() \n\t\t{
			${properties
				.map((prop) => `${prop.propertyName} = ${prop.propertyName}`)
				.join(",\n\t\t\t")}
		};
	}`;

	const builderProperties = properties
		.map((prop) => {
			const methodName = `With${prop.propertyName}`;
			const paramName = `${prop.propertyName[0].toLowerCase()}${prop.propertyName.slice(
				1
			)}`;

			return `\t${PUBLIC} ${className}${BUILDER} ${methodName}(${prop.dataType} ${paramName}) { ${prop.propertyName} = ${paramName}; return this; }`;
		})
		.join("\n");

	return `${classImports}${PUBLIC} class ${className}${BUILDER} : ${className} \n{\n${useClassImports}${builderProperties}\n\n${buildMethod}\n}`.trim();
}
