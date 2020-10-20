import { Flex, Box } from 'theme-ui';
import Button from 'components/ui/ButtonOutline';
import DefaultLayout from 'layouts/DefaultLayout';
import EditProductCell from 'components/dashboard-products/EditProductCell';
import { useAuth } from '@redwoodjs/auth';

const EditProductPage = ({ id }) => {
  const { logOut } = useAuth();

  const headerHandler = () => {
    logOut();
  };

  return (
    <DefaultLayout
      headerAction={() => (
        <>
          <Box mx="auto" />
          <Button onClick={headerHandler}>Log out</Button>
        </>
      )}
    >
      <Flex
        as="section"
        sx={{ flexDirection: 'column', flex: '1 0 auto', pt: 2 }}
        className="rw-scaffold"
      >
        <EditProductCell id={id} />
      </Flex>
    </DefaultLayout>
  );
};

export default EditProductPage;
