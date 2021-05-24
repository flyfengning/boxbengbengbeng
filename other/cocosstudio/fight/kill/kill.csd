<GameFile>
  <PropertyGroup Name="kill" Type="Node" ID="5b6603ad-66e5-4cd7-aea2-a0145062c657" Version="3.10.0.0" />
  <Content ctype="GameProjectContent">
    <Content>
      <Animation Duration="17" Speed="1.0000" ActivedAnimationName="animation0">
        <Timeline ActionTag="1660914198" Property="Scale">
          <ScaleFrame FrameIndex="0" X="4.5000" Y="4.5000">
            <EasingData Type="0" />
          </ScaleFrame>
          <ScaleFrame FrameIndex="10" X="1.0000" Y="1.0000">
            <EasingData Type="0" />
          </ScaleFrame>
        </Timeline>
        <Timeline ActionTag="883235221" Property="Scale">
          <ScaleFrame FrameIndex="10" X="1.0000" Y="1.0000">
            <EasingData Type="0" />
          </ScaleFrame>
          <ScaleFrame FrameIndex="17" X="1.5000" Y="1.5000">
            <EasingData Type="0" />
          </ScaleFrame>
        </Timeline>
        <Timeline ActionTag="883235221" Property="Alpha">
          <IntFrame FrameIndex="12" Value="255">
            <EasingData Type="0" />
          </IntFrame>
          <IntFrame FrameIndex="17" Value="0">
            <EasingData Type="0" />
          </IntFrame>
        </Timeline>
        <Timeline ActionTag="883235221" Property="VisibleForFrame">
          <BoolFrame FrameIndex="0" Tween="False" Value="False" />
          <BoolFrame FrameIndex="10" Tween="False" Value="True" />
        </Timeline>
        <Timeline ActionTag="-1799390554" Property="VisibleForFrame">
          <BoolFrame FrameIndex="0" Tween="False" Value="False" />
          <BoolFrame FrameIndex="10" Tween="False" Value="True" />
        </Timeline>
      </Animation>
      <AnimationList>
        <AnimationInfo Name="animation0" StartIndex="0" EndIndex="60">
          <RenderColor A="255" R="175" G="238" B="238" />
        </AnimationInfo>
      </AnimationList>
      <ObjectData Name="Node" ctype="GameNodeObjectData">
        <Size X="0.0000" Y="0.0000" />
        <Children>
          <AbstractNodeData Name="size" ActionTag="1660914198" Tag="7" IconVisible="True" LeftMargin="0.0001" RightMargin="-0.0001" ctype="SingleNodeObjectData">
            <Size X="0.0000" Y="0.0000" />
            <Children>
              <AbstractNodeData Name="sha_2" ActionTag="1157619151" Tag="3" IconVisible="False" LeftMargin="0.5000" RightMargin="-35.5000" TopMargin="-17.5000" BottomMargin="-17.5000" ctype="SpriteObjectData">
                <Size X="35.0000" Y="35.0000" />
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="18.0000" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition />
                <PreSize X="0.0000" Y="0.0000" />
                <FileData Type="Normal" Path="fight/kill/sha.png" Plist="" />
                <BlendFunc Src="1" Dst="771" />
              </AbstractNodeData>
              <AbstractNodeData Name="num" ActionTag="1875149685" Tag="8" IconVisible="False" LeftMargin="-30.5000" RightMargin="4.5000" TopMargin="-17.5000" BottomMargin="-17.5000" LabelText="3" ctype="TextBMFontObjectData">
                <Size X="26.0000" Y="35.0000" />
                <AnchorPoint ScaleX="1.0000" ScaleY="0.5000" />
                <Position X="-4.5000" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition />
                <PreSize X="0.0000" Y="0.0000" />
                <LabelBMFontFile_CNB Type="Normal" Path="fight/kill/fnt_kill.fnt" Plist="" />
              </AbstractNodeData>
            </Children>
            <AnchorPoint />
            <Position X="0.0001" />
            <Scale ScaleX="3.4500" ScaleY="3.4500" />
            <CColor A="255" R="255" G="255" B="255" />
            <PrePosition />
            <PreSize X="0.0000" Y="0.0000" />
          </AbstractNodeData>
          <AbstractNodeData Name="sha_2_0" ActionTag="883235221" VisibleForFrame="False" Tag="5" IconVisible="False" LeftMargin="-2.5000" RightMargin="-32.5000" TopMargin="-17.5000" BottomMargin="-17.5000" ctype="SpriteObjectData">
            <Size X="35.0000" Y="35.0000" />
            <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
            <Position X="15.0000" />
            <Scale ScaleX="1.0000" ScaleY="1.0000" />
            <CColor A="255" R="255" G="255" B="255" />
            <PrePosition />
            <PreSize X="0.0000" Y="0.0000" />
            <FileData Type="Normal" Path="fight/kill/sha.png" Plist="" />
            <BlendFunc Src="1" Dst="771" />
          </AbstractNodeData>
          <AbstractNodeData Name="lizi" ActionTag="-1799390554" VisibleForFrame="False" Tag="4" IconVisible="True" LeftMargin="18.0000" RightMargin="-18.0000" ctype="ParticleObjectData">
            <Size X="0.0000" Y="0.0000" />
            <AnchorPoint />
            <Position X="18.0000" />
            <Scale ScaleX="1.0000" ScaleY="1.0000" />
            <CColor A="255" R="255" G="255" B="255" />
            <PrePosition />
            <PreSize X="0.0000" Y="0.0000" />
            <FileData Type="Normal" Path="fight/kill/huoyanlizi.plist" Plist="" />
            <BlendFunc Src="770" Dst="1" />
          </AbstractNodeData>
        </Children>
      </ObjectData>
    </Content>
  </Content>
</GameFile>