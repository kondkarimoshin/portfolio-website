import Badge from "../../../components/ui/Badge";
import Heading from "../../../components/ui/Heading";
import Text from "../../../components/ui/Text";

const AboutHeader = () => {
    return (
        <div className="mx-auto max-w-3xl text-center">
            <Badge className="mx-auto">
                About Me
            </Badge>

            <Heading
                level={2}
                className="mt-4"
            >
                Engineering Quality at Enterprise Scale
            </Heading>

            <Text className="mt-6">
                Designing scalable automation frameworks, leading engineering
                initiatives, and delivering enterprise quality solutions for
                global banking and capital markets platforms.
            </Text>
        </div>
    );
};

export default AboutHeader;