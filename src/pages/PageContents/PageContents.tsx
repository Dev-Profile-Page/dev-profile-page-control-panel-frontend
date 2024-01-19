import * as React from 'react';

import styles from './PageContent.module.css';
import { RoundedButton, RoundedButtonColor, RoundedButtonSize } from '../../components/Buttons/RoudedButton';
import { Divider } from '../../components/Divider/Divider';
import { Github, ReactIcon, Stackoverflow, Twitter, TypeScriptIcon } from '../../components/Icons/Icons';
import { SizedBox } from '../../components/SizedBox/SizedBox';
import { PageContentSection } from '../../components/PageContentSection/PageContentSection';
import { TextInput } from '../../components/UserInputs/TextInput';
import { TextAreaInput } from '../../components/UserInputs/TextAreaInput';
import { MultiSelectInput, MultiSelectOption } from '../../components/UserInputs/MultiSelectInput';
import { ToggleInputCard } from '../../components/UserInputs/ToggleInputCard';
import { FileInput } from '../../components/UserInputs/FileInput';
import { Layout } from '../../layouts/Layout';
import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

export type PageContentsProps = {  };

export const TECHNOLOGIES: MultiSelectOption[] = [
  { value: 'react', label: 'React', id: 1, icon: ReactIcon },
  { value: 'typescript', label: 'TypeScript', id: 2, icon: TypeScriptIcon },
];

// export type PageContentsFormValues = {
//   displayName: string,
//   displayPicture: string,
//   bio: string,
//   city: string,
//   website: string,
//   // TODO: Add Cards and Technologies
// };

const schema = z.object({
  displayName: z.string().min(1, 'Display name is required'),
  // displayPicture: z.string().min(1, 'Display picture is required'),
  // bio: z.string().min(1, 'Bio is required'),
  city: z.string().min(1, 'City is required'),
  website: z.string().min(1, 'Website is required').url('Should be a valid URL'),
  // TODO: Add Cards and Technologies
});

export type PageContentsFormValues = z.infer<typeof schema>;

export function PageContents({  }: PageContentsProps) {
  const { handleSubmit, control, formState } = useForm<PageContentsFormValues>({
    defaultValues: {
      displayName: '',
      // displayPicture: '',
      // bio: '',
      city: '',
      website: '',
    },
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: PageContentsFormValues) => {
    console.log(data);
  };

  return (
    <Layout isLogoCenter>
      <div className={styles.page}>
        <div className={styles['page-title-container']}>
            <h1>Page Contents</h1>
        </div>

        <form className={styles['form']} onSubmit={handleSubmit(onSubmit)}>
          <PageContentSection title='General'>
            <TextInput
              label='Display Name'
              placeHolder='Type out or click autofill'
              control={control}
              name='displayName'
              rules={{required: true}}
            />
            <Divider />

            <FileInput label='Display picture' placeHolder='Click to select a picture or autofill' />
            <Divider />

            <TextAreaInput label='Bio' placeHolder='Type out or click autofill' />
            <Divider />

            <TextInput
              label='City'
              placeHolder='Type out'
              control={control}
              name='city'
            />
            <Divider />

            <TextInput
              label='Website'
              placeHolder='Type out'
              control={control}
              name='website'
            />
            <Divider />

          </PageContentSection>

          <PageContentSection title='Cards'>
            <div className={styles['cards-container']}>
              <ToggleInputCard id='TWITTER' icon={Twitter} name='Twitter' isSelected={true} onChange={console.log} />
              <ToggleInputCard id='STACKOVERFLOW' icon={Stackoverflow} name='StackOverflow' isSelected={true} onChange={console.log} />
              <ToggleInputCard id='GITHUB' icon={Github} name='Github' isSelected={true} onChange={console.log} />
            </div>
          </PageContentSection>

          <Divider />

          <PageContentSection title='Technologies' subtitle='Select upto 5'>
            <MultiSelectInput label='' placeHolder='Type to search' options={TECHNOLOGIES} />
          </PageContentSection>

          <Divider />

          <div className={styles['save-button-container']}>
            <RoundedButton backgroundColor={RoundedButtonColor.GREEN} size={RoundedButtonSize.MEDIUM}>Save</RoundedButton>
          </div>
        </form>
        <SizedBox width='auto' height={50} />
      </div>
    </Layout>
  );
}