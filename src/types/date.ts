import { Scalar, CustomScalar } from '@nestjs/graphql';
import { Kind, ValueNode } from 'graphql';

@Scalar('Date')
export class DateScalar implements CustomScalar<string, Date> {
	description = 'Date custom scalar type';

	parseValue(value: number): Date {
		return new Date(value); // value from the client
	}

	serialize(value: string): string {
		return new Date(value).toString(); // value sent to the client
	}

	parseLiteral(ast: ValueNode): Date {
		if (ast.kind === Kind.INT) {
			return new Date(ast.value);
		}
		return null;
	}
}
